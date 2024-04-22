import {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import  {TextInput, Button} from 'react-native-paper'
import { useForm, Controller } from "react-hook-form"

export default function Login({navigation, route}) {
  // Definición de useForm para validar los controles tipo textInput
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      email: "",
      password: "",
      salary:""
    },
  })
  // Si los datos están validados, correctamente, se mostrarán por console
  const onSubmit = (data) => console.log(data)
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
          minLength:3,
          maxLength: 50,
          pattern: /^[A-Za-zÑñáÁéÉíÍóÓúÚ\s]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Nombre"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            left={<TextInput.Icon icon="account-edit" />}
            mode='outlined'
          />
        )}
        name="firstName"
      />
      {errors.firstName?.type === "required" && <Text style={{color:'red'}}>El nombre es obligatori</Text>}
      {errors.firstName?.type === "maxLength" && <Text style={{color:'red'}}>La longitud no debe exceder de 50 chars</Text>}
      {errors.firstName?.type === "minLength" && <Text style={{color:'red'}}>La longitud mínima es de 3 chars</Text>}
      {errors.firstName?.type === "pattern" && <Text style={{color:'red'}}>El nombre debe tener solo letras y/o espacios</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Correo Electrónico"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            left={<TextInput.Icon icon="account-edit" />}
            mode='outlined'
          />
        )}
        name="email"
      />
      {errors.email?.type === "required" && <Text style={{color:'red'}}>El nombre es obligatori</Text>}
      {errors.email?.type === "pattern" && <Text style={{color:'red'}}>El correo electrónico debe contener caracteres válidos</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          pattern:  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            secureTextEntry
            label="Contraseña"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            right={<TextInput.Icon icon="eye" />}
            mode='outlined'
          />
        )}
        name="password"
      />
      {errors.password?.type === "required" && <Text style={{color:'red'}}>La contraseña es obligatoria</Text>}
      {errors.password?.type === "pattern" && <Text style={{color:'red'}}>La contraseña debe tener .....</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          max:2000000,
          min:1000000,
          pattern: /^[0-9]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Salario"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            left={<TextInput.Icon icon="account-edit" />}
            mode='outlined'
          />
        )}
        name="salary"
      />
      {errors.salary?.type === "required" && <Text style={{color:'red'}}>El salario es obligatorio</Text>}
      {errors.salary?.type === "min" && <Text style={{color:'red'}}>El salario debe ser minimo de 1 millón</Text>}
      {errors.salary?.type === "max" && <Text style={{color:'red'}}>El salario debe ser maximo de 2 millones</Text>}
      {errors.salary?.type === "pattern" && <Text style={{color:'red'}}>solo numeros</Text>}

      <Button icon="content-save" mode="contained" onPress={handleSubmit(onSubmit)}>
        Guardar
      </Button>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
