import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Login = () => {

    const [login, setLogin] = useState({
        usuario: '',
        clave: ''
    });

    const { usuario, clave } = login;

    const onChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        document.getElementById('usuario').focus();
    }, []);

    return (
        <>
            <main>
                <div className="container">
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">Iniciar Sesión</h5>
                                                <p className="text-center small">Bienvenido, ingrese sus credenciales</p>
                                            </div>
                                            <form className="row g-3 needs-validation" noValidate>
                                                <div className="col-12">
                                                    <label htmlFor="usuario" className="form-label">Usuario</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                        <input type="text"
                                                            className="form-control"
                                                            id="usuario"
                                                            name="usuario"
                                                            value={usuario}
                                                            onChange={onChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <label htmlFor="clave" className="form-label">Contraseña</label>
                                                    <input type="password"
                                                        className="form-control"
                                                        id="clave"
                                                        name="clave"
                                                        value={clave}
                                                        onChange={onChange}
                                                        required
                                                    />
                                                </div>

                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100" type="submit">Ingresar</button>
                                                </div>
                                                <div className="col-12">
                                                    <p className="small mb-0">No tienes cuenta?
                                                        <Link to={"/crear-cuenta"}> Crear Cuenta</Link>
                                                    </p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Login;
