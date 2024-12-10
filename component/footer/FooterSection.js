import Link from 'next/link';
import React from 'react';

const FooterSection = () => {
    return (
        <footer className='tf__footer mt_100'>
            <div className='tf__footer_overlay pt_75'>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <div className='col-xl-3 col-sm-10 col-md-7 col-lg-6'>
                            <div className='tf__footer_logo_area'>
                                <Link className='footer_logo' href='#'>
                                    <img src='/images/logo-academia.svg' alt='AcademiaBalance' className='img-fluid w-100' />
                                </Link>
                                <p>
                                    Academia Balance, tu centro de formación de confianza para refuerzo universitario e idiomas. Clases personalizadas adaptadas
                                    a tus necesidades.
                                </p>
                                <ul className='d-flex flex-wrap'>
                                    <li>
                                        <a href='#'>
                                            <i className='fab fa-facebook-f'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <i className='fab fa-linkedin-in'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <i className='fab fa-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#'>
                                            <i className='fab fa-instagram'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-xl-2 col-sm-10 col-md-5 col-lg-5'>
                            <div className='tf__footer_content xs_mt_50'>
                                <h3>Enlaces rápidos</h3>
                                <ul>
                                    <li>
                                        <Link href='#'>Nuestros Servicios</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>Metodología</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>Sobre Nosotros</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>Contacto</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>Reserva tu clase</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-xl-3 col-sm-10 col-md-7 col-lg-col-lg-6'>
                            <div className='tf__footer_content xs_mt_30'>
                                <h3>Contacto</h3>
                                <p>
                                    <strong>Sedes:</strong>
                                </p>
                                <p>Balance Aguilera: C/ Alberto Aguilera, 54, Madrid</p>
                                <p>Balance Chaminade: P. de Juan XXIII, 9, Madrid</p>
                                <p>
                                    <span>Teléfono: +34 696 555 000</span>
                                    <span>Email: info@academiabalance.com</span>
                                </p>
                            </div>
                        </div>

                        <div className='col-xl-3 col-sm-10 col-md-5 col-lg-4 col-lg-5'>
                            <div className='tf__footer_content xs_mt_45'>
                                <h3>Boletín informativo</h3>
                                <p>Suscríbete para recibir información sobre nuestros cursos, horarios y promociones especiales.</p>
                                <form>
                                    <input type='email' placeholder='Tu correo electrónico' />
                                    <button>Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='tf__copyright'>
                                <p>© Academia Balance {new Date().getFullYear()} | Todos los derechos reservados</p>
                                <ul className='d-flex flex-wrap'>
                                    <li>
                                        {/* <Link href="/privacy-policy">Privacy policy</Link> */}
                                        <Link href='#'>Política de privacidad</Link>
                                    </li>
                                    {/* <li>
                    <Link href="/about">About</Link>
                  </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
