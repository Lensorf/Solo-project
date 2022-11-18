const React = require('react');
const Layout = require('./Layout');

module.exports = function Auth() {
  return (
    <Layout>
      <link rel="stylesheet" href="/css/log.css" />
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5">
                    <h2 className="title text-uppercase text-center mb-5">Авторизация</h2>
                    <form method="POST" action="/log">
                      <div className="phone-email">
                        <div className="form-outline mb-4 divMail">
                          <label className="form-label" htmlFor="form3Example3cg">Email адрес:</label>
                          <input type="email" required name="email" id="form3Example3cg" className="form-control form-control-lg" />
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cdg">Пароль:</label>
                        <input type="password" required name="password" id="form3Example4cdg" className="form-control form-control-lg" />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="floating-button btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Войти

                        </button>
                      </div>
                      <p className="text text-center text-muted mt-5 mb-0">
                        У вас ещё нет аккаунта?
                        {' '}
                        <a
                          href="/reg"
                          className="linked fw-bold text-body"
                        >
                          <u>Зарегистрироваться здесь</u>
                        </a>

                      </p>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};
