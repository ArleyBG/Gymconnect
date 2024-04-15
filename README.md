<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/estilos.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <title>Pagina de Inicio</title>
</head>
<body>

    <!--header-->
    <header class="container-fluid">
        <div class="row row-head align-items-center">
            <div class="col col-md-1 col-lg-1">
                <img class=" img-fluid" src="img/arley's gym logo.png" alt="" width="200" height="200">
            </div>
            <div class="col">
                <h2>GYMCONNECT</h2>
            </div>

            <div class="col col-md-2 col-lg-1 text-end">
                <a type="button" href="#" class="btn dropdown-toggle btn-in" data-bs-toggle="dropdown">Sign in</a>
                <ul class="dropdown-menu">
                    <li><h1 class="dropdown-header mb-2 text-center">¿Quien eres?</h1></li>
                    <li><hr class="dropdown-divider"></hr></li>

                    <img class="mx-auto d-block" src="img/Administrador.png" alt="" width="40" height="50">   
                    <li><a class="dropdown-item text-center" href="form_singin_admin.html">Administrador</a></li>
                    

                    <img class="mx-auto d-block" src="img/empleado.png" alt="" width="40" height="50">
                    <li><a class="dropdown-item text-center" href="form_signin_empleado.html">Empleado</a></li>

                    <img class="mx-auto d-block" src="img/cliente.png" alt="" width="40" height="50">
                    <li><a class="dropdown-item mb-2 text-center" href="form_signin_cliente.html">Cliente</a></li>
                </ul>
            </div>

            <div class="col col-md-2 col-lg-1">
                <a type="button" href="#" class="btn dropdown-toggle btn-in" data-bs-toggle="dropdown">Sign up</a>
                <ul class="dropdown-menu">
                    <li><h1 class="dropdown-header mb-2 text-center">¿Quien eres?</h1></li>
                    <li><hr class="dropdown-divider"></hr></li>

                    <img class="mx-auto d-block" src="img/Administrador.png" alt="" width="40" height="50">   
                    <li><a class="dropdown-item text-center" href="form_registro_Admin.html">Administrador</a></li>

                    <img class="mx-auto d-block" src="img/empleado.png" alt="" width="40" height="50">
                    <li><a class="dropdown-item text-center" href="form_registro_empleado.html">Empleado</a></li>

                    <img class="mx-auto d-block" src="img/cliente.png" alt="" width="40" height="50">
                    <li><a class="dropdown-item mb-2 text-center" href="form_registro_cliente.html">Cliente</a></li>
                </ul>
            </div>

            <div class="col col-md-1 col-lg-1 dropdown">
                <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown"><i id="menuIcon" class="fas fa-bars"></i></button>
                <ul class="dropdown-menu">
                    <li><h2 class="dropdown-header text-center">GYMCONNECT</h2></li>
                        <div class="text-center">
                            <a href="form_registro_cliente.html" class="btn btn-outline-danger mt-3 mb-3 btn-sm">¡Inscribete ya!</a>
                        </div>
                            <li><a class="dropdown-item mb-3 mt-2" href="#">Reservas</a></li>
                            <li><a class="dropdown-item mb-3" href="#">Productos</a></li>
                            <li><a class="dropdown-item mb-3" href="#">Membresias</a></li>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </header>

    <!-- img de portada -->
    <div class="container">
        <div class="row mt-3">
            <div class="col-12">
                <img class="img-fluid rounded" src="img/pagina_inicio.jpg" alt="" width="1300" height="">
            </div>
        </div>

        <!-- form busqueda de la sede -->
        <div class="row mt-5 justify-content-center">
            <div class="col-8 col-md-6">
                <form action="">
                    <h4 class="sede mb-4">Encuentre la Sede mas Cercana</h4>

                    <div class="form-floating">
                        <input class="form-control" type="search" placeholder="Buscar ciudad" aria-label="Buscar" id="buscar" name="search">
                        <label for="buscar">ciudad</label>
                        <div class="text-center col">
                            <button class="btn btn-torey btn-outline-success mt-3 mb-5 w-50" type="submit">Buscar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- imagenes de inscribirse -->
        <div class="row">
            <div class="col-12 col-lg-4">
                <div class="mb-5">
                    <h5 class=" mb-5 titulo text-center text-lg-start">Elige tu plan y entrena con nosotros</h5>
                    <img class="mx-auto d-block float-lg-start rounded" src="img/entrenador.jpg" alt="" width="300" height="200">
                </div>
            </div>

            <div class="col-12 mb-5 col-lg-4">
                <button class="btn btn-danger w-100 mb-4" type="button" href="#">¡Inscribete ya!</button>
                <img class=" mx-auto d-block rounded mt-2" src="img/suscribirse.png" alt="" width="300" height="206">
            </div>

            <div class="col-12 mb-5 col-lg-4">
                <h5 class="mb-5 titulo text-center text-lg-end">Nuestros planes al mejor precio</h5>
                <img class="rounded mx-auto d-block float-lg-end" src="img/membresia.png" alt="" width="300" height="200">
            </div>
        </div>
        </div>

        <!-- footer -->
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-9 text-center border-bottom">
                        <h2>GYM<img class="img img-fluid" src="img/logogym.png" alt="" width="170" height="170">CONNECT</h2>
                    </div>

                    <div class="col-9 mt-4 text-center border-bottom">
                        <h5 class="mb-3">Siguenos</h5>
                        <ul class="list-unstyled list-group list-group-horizontal justify-content-center mb-4">
                            <li>
                                <a href="https://www.facebook.com/arley.benavidesgiraldo?mibextid=kFxxJD" class="btn btn-light rounded-circle me-3"><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="#" class="btn btn-light rounded-circle me-3"><i class="fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#" class="btn btn-light rounded-circle me-3"><i class="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="#" class="btn btn-light rounded-circle"><i class="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div class="row">
                    <div class="col-12 col-md-6 mt-4 d-flex flex-column align-items-center">
                        <ul class="list-unstyled">
                            <h5 class="m-2">Gymconnect</h5>
                            <li class="">
                                <a class="btn text-light" href="#" role="link">Planes</a>
                            </li>
                            <li class="">
                                <a class="btn text-light" href="#" role="link">Sedes</a>
                            </li>
                            <li class="">
                                <a class="btn text-light" href="#" role="link">FAQ</a>
                            </li>
                            <li class="">
                                <a class="btn text-light" href="#" role="link">Legal</a>
                            </li>
                            <li class="">
                                <a class="btn text-light" href="#" role="link">Contacto</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-12 col-md-6 mt-4 d-flex flex-column align-items-center">
                        <ul class="list-unstyled mb-5">
                            <h5 class="m-2">Planes</h5>
                            <li class="">
                                <a class="btn text-light" href="#" role="link">Trabaja con nosotros</a>
                            </li>
                            <li class="">
                                <a class="btn text-light" href="#" role="link">Superintendencia de Industria y Comercio</a>
                            </li>
                            <li class="">
                                <a class="btn text-light" href="#" role="link">Politicas de privacidad</a>
                            </li>
                            <li class="">
                                <a class="btn text-light" href="#" role="link">Politicas de datos personales</a>
                            </li>
                            <li class="">
                                <a class="btn text-light" href="#" role="link">Termonis y condiciones</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    

    <script src="js/jquery-3.7.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
