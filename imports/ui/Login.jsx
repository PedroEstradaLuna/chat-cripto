import React, { useState } from 'react';

export const Login = () => {
  return (
    <div class="container-lg">
        <main class="container-main-lg">
            <h2>Login</h2>

            <form class="form-main-lg">
                <div>
                    <label>Usuario</label>
                    <input type="text"/>
                    <label>Contraseña</label>
                    <input type="password"/>
                </div>
                <button>Inicar Sesión</button>
            </form>
        </main>
    </div>
  );
};