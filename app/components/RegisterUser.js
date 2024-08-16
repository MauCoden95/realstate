import React, { useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

export const RegisterUser = ({ dataForm }) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_API_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  useEffect(() => {
    const registerUser = async () => {
      const { user, error } = await supabase.auth.signUp({
        email: dataForm.email,
        password: dataForm.password,
      });

      if (error) {
        console.error('Error al crear el usuario:', error.message);
      } else {
        console.log('Usuario creado con éxito:', user);
      }
    };

    if (dataForm) {
      registerUser();
    }
  }, [dataForm]);

  return null; 
};
