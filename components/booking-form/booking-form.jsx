"use client";

import styles from "./booking-form.module.css";

import step1 from "@/assets/step-1.svg";
import step2 from "@/assets/step-2.svg";
import step3 from "@/assets/step-3.svg";
import Image from "next/image";

import { useState } from "react";
import Input from "../input/input";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import Loader from "../loader/loader";

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    people: "",
    date: "",
    time: "",
    notes: "",
    privacy: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    try {
      const response = await axios.post("/api/booking", formData);
      console.log(response.data);
      setSuccess(true);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  function validateStep1() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Il nome è obbligatorio";
    if (!formData.surname.trim())
      newErrors.surname = "Il cognome è obbligatorio";

    if (!formData.phone.trim()) newErrors.phone = "Il telefono è obbligatorio";
    const phoneRegex = /^\+?[0-9]{7,16}$/;
    if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Il telefono non è valido";

    if (!formData.email.trim()) newErrors.email = "L'email è obbligatoria";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email))
      newErrors.email = "L'email non è valida";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function validateStep2() {
    const newErrors = {};
    if (!formData.people.trim())
      newErrors.people = "Il numero di persone è obbligatorio";

    if (!formData.date.trim()) newErrors.date = "La data è obbligatoria";
    const today = new Date().toISOString().split("T")[0];
    if (formData.date < today)
      newErrors.date = "La data non può essere nel passato";

    if (!formData.time.trim()) newErrors.time = "L'ora è obbligatoria";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function validateStep3() {
    const newErrors = {};
    if (!formData.privacy) newErrors.privacy = "Devi accettare la privacy";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleNextStep() {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    if (step === 3 && !validateStep3()) return;

    setStep((prev) => prev + 1);
  }

  function handleBackStep() {
    setStep((prev) => prev - 1);
  }

  function formatDate(dateString) {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  }

  return (
    <div className={styles.bookingForm}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.steps}
        >
          {step === 1 && <Image src={step1} alt="Step 1" />}
          {step === 2 && <Image src={step2} alt="Step 2" />}
          {step === 3 && <Image src={step3} alt="Step 3" />}
        </motion.div>
      </AnimatePresence>
      {step === 1 && (
        <div className={styles.formStep}>
          <h2>Contatti</h2>
          <Input
            label="Nome"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            onFocus={() => setErrors({ ...errors, name: "" })}
          />
          <Input
            label="Cognome"
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            error={errors.surname}
            onFocus={() => setErrors({ ...errors, surname: "" })}
          />
          <Input
            label="Telefono"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            onFocus={() => setErrors({ ...errors, phone: "" })}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            onFocus={() => setErrors({ ...errors, email: "" })}
          />
        </div>
      )}
      {step === 2 && (
        <div className={styles.formStep}>
          <h2>Prenotazione</h2>
          <Input
            label="Numero di persone"
            type="number"
            name="people"
            value={formData.people}
            onChange={handleChange}
            error={errors.people}
            onFocus={() => setErrors({ ...errors, people: "" })}
          />
          <Input
            label="Data"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            error={errors.date}
            onFocus={() => setErrors({ ...errors, date: "" })}
          />
          <Input
            label="Ora"
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            error={errors.time}
            onFocus={() => setErrors({ ...errors, time: "" })}
          />
        </div>
      )}
      {step === 3 && (
        <div className={styles.formStep}>
          <h2>Conferma</h2>
          <Input
            label="Note"
            type="textarea"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
          <Input
            label="Dichiaro di aver letto e accettato l'informativa sulla privacy"
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            error={errors.privacy}
            onFocus={() => setErrors({ ...errors, privacy: "" })}
          />
        </div>
      )}
      <div className={styles.formActions}>
        {step > 1 && (
          <button onClick={handleBackStep} className={styles.backBtn}>
            Indietro
          </button>
        )}
        {step < 3 && (
          <button onClick={handleNextStep} className={styles.nextBtn}>
            Avanti
          </button>
        )}
        {step === 3 && (
          <button className={styles.nextBtn} onClick={handleSubmit}>
            {loading ? <Loader /> : "Prenota"}
          </button>
        )}
      </div>
      {success && (
        <div className={styles.success}>
          <p>Prenotazione effettuata con successo!</p>
        </div>
      )}
      {step === 3 && (
        <div className={styles.reviewReservation}>
          <h2>Riepilogo prenotazione</h2>
          <p>
            <strong>Nome:</strong> {formData.name} {formData.surname}
          </p>
          <p>
            <strong>Telefono:</strong> {formData.phone}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Numero persone:</strong> {formData.people}
          </p>
          <p>
            <strong>Data:</strong> {formatDate(formData.date)}
          </p>
          <p>
            <strong>Ora:</strong> {formData.time}
          </p>
        </div>
      )}
    </div>
  );
}
