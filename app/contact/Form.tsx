"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { useT } from "@/lib/useT";
import Input from "@/components/Input";
import Error from "@/components/Error";
import Loader from "@/components/Loader";

interface User {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Form = () => {
  const t = useT();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [sended, setSended] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (data) => {
    setSending(true);
    const sender = {
      to: "",
      from: "",
      from_name: "",
      subject: "Contact",
    };

    try {
      const response = await axios.post("", { ...data, ...sender });
      if (response?.data?.error) {
        setError(response.data.message);
        setSending(false);
      } else {
        setSended(true);
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      if (axiosError.response) {
        setError(axiosError.response.data?.message || "Error desconocido");
      } else {
        setError("Error de conexión");
      }
      setSending(false);
    }
  };

  const errorMessage = t.contact.required;

  if (sended)
    return (
      <div className="flex justify-center">
        <div className="text-xl lg:text-2xl text-center font-bold text-white rounded-full bg-browndark2 py-4 px-8 w-fit">
          {t.contact.success}
        </div>
      </div>
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3">
      <div>
        <Input
          type="text"
          placeholder={t.contact.name}
          register={register("name", { required: errorMessage })}
        />
        <Error error={errors.name} />
      </div>
      <div>
        <Input
          type="email"
          placeholder={t.contact.email}
          register={register("email", {
            required: errorMessage,
            maxLength: 50,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Dirección de correo electrónico inválida",
            },
          })}
        />
        <Error error={errors.email} />
      </div>
      <div>
        <Input
          type="text"
          placeholder={t.contact.phone}
          register={register("phone", {
            required: errorMessage,
            maxLength: 20,
          })}
        />
        <Error error={errors.phone} />
      </div>
      <div>
        <textarea
          className="w-full border border-white rounded-2xl px-6 text-sm py-2 placeholder:text-white"
          placeholder={t.contact.message}
          {...register("message", { required: errorMessage })}
          rows={5}
        ></textarea>
        <Error error={errors.message} />
      </div>
      <div className="flex items-center justify-between mt-2">
        <div>
          {sending ? (
            <Loader />
          ) : (
            <button className="bg-primary font-bold rounded-full px-8 py-2 h-11 cursor-pointer hover:bg-secondary transition-all">
              {t.contact.button}
            </button>
          )}
        </div>
        <div>
          <img src="/assets/logo.svg" alt="Logo Orbitar" className="h-5" />
        </div>
      </div>
    </form>
  );
};

export default Form;
