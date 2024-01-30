import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ProductForm from "../components/Form";
import { describe } from "node:test";
import ProductTable from "../components/Table";

const mockFn = jest.fn();
const mockData = [
  {
    id: 4,
    name: "Another add",
    price: 54,
    quantity: 10,
    images: "image url",
    type: "type",
    location: "new location",
  },
];

describe("Form", () => {
  it("Renders a form", () => {
    render(
      <ProductForm
        addHandler={mockFn}
        data={mockData}
        editHandler={mockFn}
        setEdit={mockFn}
      />
    );

    expect(screen.getByText("Images URL")).toBeInTheDocument();
    expect(screen.getByText("Product Type")).toBeInTheDocument();
    expect(screen.getByText("Location")).toBeInTheDocument();
    expect(screen.getByText("Quantity")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Product Name")).toBeInTheDocument();
    expect(screen.getByText("Images URL")).toBeInTheDocument();
  });
});

describe("List", () => {
  it("Renders the list", () => {
    render(
      <ProductTable products={mockData} onDelete={mockFn} onEdit={mockFn} />
    );

    expect(screen.getByText("Another add")).toBeInTheDocument();
    expect(screen.getByText("image url")).toBeInTheDocument();
    expect(screen.getByText("new location")).toBeInTheDocument();
    expect(screen.getByText("type")).toBeInTheDocument();
    expect(screen.getByText(10)).toBeInTheDocument();
    expect(screen.getByText(54)).toBeInTheDocument();
  });
});
