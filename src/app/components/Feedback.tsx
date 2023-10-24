import styles from "./../page.module.css";
import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FeedBack() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const router = useRouter();
  //   const [auth, setAuth] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = data;

    const res = await fetch("http://localhost:3001/api/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await res.json();

    console.log(result);
    router.push("/tnx");
  };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.value);
    const name = e.target.name;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: e.target.value,
      };
    });
  };

  //   useEffect(() => {
  //     const canSave: boolean = [...Object.values(data)].every(Boolean);

  //     setAuth(canSave);
  //   }, [data]);
  return (
    <form className={styles.main} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Shayan"
        // pattern="([A-Z])[\w+.]{1,}"
        value={data.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Jane@yoursite.com"
        name="email"
        // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        value={data.email}
        onChange={handleChange}
      />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        placeholder="Your message here..."
        rows={5}
        cols={33}
        value={data.message}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
