"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProductForm from "./components/Form";
import ProductTable from "./components/Table";

export default function Home() {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);

  const getData = () => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, [edit]);

  const onEdit = (data) => {
    setEdit(data);
  };

  const deleteHandler = (id) => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    })
      .then(async (res) => {
        const data = await res.json();
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editHandler = (formData) => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      method: "PATCH",

      body: formData,
    })
      .then(async (res) => {
        const data = await res.json();
        getData();
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const addHandler = (formData) => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`, {
      method: "POST",

      body: formData,
    })
      .then(async (res) => {
        const data = await res.json();
        getData();
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <main>
      <ProductForm
        data={edit}
        setEdit={setEdit}
        editHandler={editHandler}
        addHandler={addHandler}
      />
      <ProductTable products={data} onEdit={onEdit} onDelete={deleteHandler} />
    </main>
  );
}
