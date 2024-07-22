'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema=z.object({
    name:z.string(),
    email:z.string(),
    message:z.string()
})
const useHandleMailme = () => {
    const form = useForm({
        resolver: zodResolver(formSchema)
    });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

   async function onSubmit(data) {
        console.log(data)
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          if (response.ok) {
            alert('Email sent successfully!');
          } else {
            alert('Failed to send email');
          }
        } catch (error) {
          console.error('Error sending email:', error);
        }
      };
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      
    }
  return {
    form,
    onSubmit: form.handleSubmit(onSubmit),
    handleChange
  }
}

export default useHandleMailme
