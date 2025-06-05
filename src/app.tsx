import "./app.css";
import "./index.css";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import rtlPlugin from "stylis-plugin-rtl";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { lazy, Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "utils/i18n";

const ToastContainer = lazy(() =>
  import("react-toastify").then((module) => ({
    default: module.ToastContainer,
  }))
);

import { EnumSellerRole } from "statics/enums";
import useUserStatusPolling from "hooks/user-connected";
import { useNavigatorOnLine } from "utils/is-online";
import { t } from "i18next";
import ErrorBoundary from "pages/error-boundary/error-boundary";
// import SingleOrderToopDrop from "pages/orders/orders-toop-drop/single-order-toop-drop";
// import NewOrderToopDrop from "pages/orders/orders-toop-drop/new-order-toop-drop";
// import ListOrderToopDrop from "pages/orders/orders-toop-drop/orders-toop-drop";

// const Root = lazy(() => import("pages/visitor/home/home"));
// const Register = lazy(() => import("./pages/visitor/register/register"));
import Landing from "pages/landing/landing";
// import SignUp from "pages/visitor-v1/sign-up";
// import SignIn from "pages/visitor-v1/sign-in";
// import ForgotPassword from "pages/visitor-v1/forgot-password";
// import ResetPassword from "pages/visitor-v1/reset-password";

const SignUp=lazy(() => import("pages/visitor-v1/sign-up"))
const SignIn=lazy(() => import("pages/visitor-v1/sign-in"))
const ForgotPassword=lazy(() => import("pages/visitor-v1/forgot-password"))
const ResetPassword=lazy(() => import("pages/visitor-v1/reset-password"))

const Home = lazy(() => import("./pages/home/home"));
const Sidebar = lazy(() => import("components/sidebar/sidebar"));
const Navbar = lazy(() => import("components/navbar/navbar"));
const ListOrderNormalSeller = lazy(
  () => import("pages/orders/orders-normal-seller/orders-normal-seller")
);
const SingleOrderNormalSeller = lazy(
  () => import("pages/orders/orders-normal-seller/single-order-normal-seller")
);

const ListOrderAffiliateSeller = lazy(
  () => import("pages/orders/orders-affiliate-seller/orders-affiliate-seller")
);
const SingleOrderAffiliateSeller = lazy(
  () =>
    import("pages/orders/orders-affiliate-seller/single-order-affiliate-seller")
);
const NewOrderAffiliateSeller = lazy(
  () =>
    import(
      "pages/orders/orders-affiliate-seller/new-order-affiliate-seller/new-order-affiliate-seller"
    )
);
const ListOrderToopDrop = lazy(
  () => import("pages/orders/orders-toop-drop/orders-toop-drop")
);
const SingleOrderToopDrop = lazy(
  () => import("pages/orders/orders-toop-drop/single-order-toop-drop")
);
const NewOrderToopDrop = lazy(
  () => import("pages/orders/orders-toop-drop/new-order-toop-drop")
);
const NewOrderNormalSeller = lazy(
  () => import("pages/orders/orders-normal-seller/new-order-normal-seller")
);
const ListProductsNormalSeller = lazy(
  () => import("pages/products-normal-seller/products-normal-seller")
);
const SingleProductNormalSeller = lazy(
  () =>
    import(
      "pages/products-normal-seller/single-product-normal-seller/single-product-normal-seller"
    )
);
const NewProductNormalSeller = lazy(
  () =>
    import(
      "pages/products-normal-seller/new-product-normal-seller/new-product-normal-seller"
    )
);

const NotFound = lazy(() => import("pages/not-found/not-found"));
const ListSourcing = lazy(() => import("pages/sourcings/sourcings"));
const SingleSourcing = lazy(
  () => import("pages/sourcings/single-sourcing/single-sourcing")
);
const NewSourcing = lazy(
  () => import("pages/sourcings/new-sourcing/new-sourcing")
);
const ListInvoiceNormalSeller = lazy(() => import("pages/invoices/invoices"));
const ListInvoiceToopDrop = lazy(
  () => import("pages/invoices-toop-drop/invoices")
);
const Pricing = lazy(() => import("components/pricing/pricing"));
const ListPayments = lazy(() => import("pages/payments/payments"));
const SinglePayment = lazy(
  () => import("pages/payments/single-payment/single-payment")
);
const Simulation = lazy(() => import("pages/simulations/simulations"));
const ListProductsAffiliateSeller = lazy(
  () => import("pages/products-affiliate-seller/products-affiliate-seller")
);
const SingleProductAffiliateSeller = lazy(
  () =>
    import(
      "pages/products-affiliate-seller/single-product-affiliate-seller/single-product-affiliate-seller"
    )
);
const ListProductsToopDrop = lazy(
  () => import("pages/products-toop-drop/products-toop-drop")
);
const SingleProductToopDrop = lazy(
  () =>
    import(
      "pages/products-toop-drop/single-product-toop-drop/single-product-toop-drop"
    )
);
const Settings = lazy(() => import("pages/settings/settings"));
const GeneralSettings = lazy(
  () => import("pages/settings/sections/general-settings/general-settings")
);
const IntegrationSettings = lazy(
  () => import("pages/settings/sections/integrtion/integration")
);
const InformationsSettings = lazy(
  () => import("pages/settings/sections/informations/informations")
);

const Alert = lazy(() => import("@mui/material/Alert"));

function App() {
  const { i18n } = useTranslation();
  const seller = useSelector((state: any) => state.seller.currentSeller);

  useEffect(() => {
    const dir = i18n.dir(i18n.language);
    document.documentElement.dir = dir;
  }, [i18n, i18n.language]);

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const cacheLtr = createCache({
    key: "mui-style-ltr",
  });

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "Cairo",
        textTransform: "none",
        fontSize: 16,
      },
    },
  });

  // Use the custom hook
  useUserStatusPolling(seller);

  const isOnline = useNavigatorOnLine();

  //handle lazy load next pages
  // const [isLoading, setIsLoading] = useState(true);

  // const preloadNextPagesLandingPage = () => {
  // Register.preload = () => import("./pages/visitor/register/register");
  // Signup.preload = () => import("pages/visitor/signup/Signup");
  // Forgetpassword.preload = () =>
  // import("pages/visitor/forget-password/forget-password");
  // Register.preload();
  // Signup.preload();
  // Forgetpassword.preload();
  // };

  // useEffect(() => {
  //   if (!isLoading) preloadNextPagesLandingPage();
  // }, [isLoading]);

  return !seller ? (
    <CacheProvider value={i18n.dir() === "rtl" ? cacheRtl : cacheLtr}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div></div>}>
          <ToastContainer
            position="bottom-left"
            autoClose={3000}
            hideProgressBar={true}
            limit={3}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Suspense>
        <div className="App">
          <Routes>
            {/* <Route path="/">
              <Route index path="/" element={<Landing />} />
              <Route
                path="sign-up"
                element={
                  <Suspense
                    fallback={
                      <div>
                      </div>
                    }
                  >
                    <SignUp />
                  </Suspense>
                }
              />
              <Route
                path="sign-in"
                element={
                  <Suspense
                    fallback={
                      <div>
                    
                      </div>
                    }
                  >
                    <SignIn />
                  </Suspense>
                }
              />
              <Route
                path="forgot-password"
                element={
                  <Suspense
                    fallback={
                      <div>
                   
                      </div>
                    }
                  >
                    <ForgotPassword />
                  </Suspense>
                }
              />
              <Route
                path="reset-password"
                element={
                  <Suspense
                    fallback={
                      <div className="loader-container">
                        <div className="loader"></div>
                      </div>
                    }
                  >
                    <ResetPassword />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback={<div></div>}>
                    <Navigate to="/" />
                  </Suspense>
                }
              />
            </Route> */}
          </Routes>
        </div>
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <CacheProvider value={i18n.dir() === "rtl" ? cacheRtl : cacheLtr}>
      <ThemeProvider theme={theme}>
        <div className="App">
          {!isOnline && (
            <Suspense fallback={<div></div>}>
              <Alert severity="error">{t("no internet connection!")}</Alert>
            </Suspense>
          )}
          <Suspense fallback={<div></div>}>
            <Sidebar seller={seller} />
          </Suspense>
          <ErrorBoundary>
            <div className="page">
              <Suspense fallback={<div></div>}>
                <Navbar />
              </Suspense>
              <Routes>
                <Route path="/">
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route path="sign-in" element={<Navigate to="/home" />} />
                  <Route
                    path="forgot-password"
                    element={<Navigate to="/home" />}
                  />
                  <Route path="sign-up" element={<Navigate to="/home" />} />
                  <Route path="home">
                    <Route
                      index
                      element={
                        <Suspense
                          fallback={
                            <div className="loader-container">
                              <div className="loader"></div>
                            </div>
                          }
                        >
                          <Home />
                        </Suspense>
                      }
                    />
                  </Route>

                  {seller.role === EnumSellerRole.affiliate && (
                    <Route path="products-affiliate-seller">
                      <Route
                        index
                        element={
                          <Suspense
                            fallback={
                              <div className="loader-container">
                                <div className="loader"></div>
                              </div>
                            }
                          >
                            <ListProductsAffiliateSeller />
                          </Suspense>
                        }
                      />
                      <Route
                        path=":id"
                        element={
                          <Suspense
                            fallback={
                              <div className="loader-container">
                                <div className="loader"></div>
                              </div>
                            }
                          >
                            <SingleProductAffiliateSeller />
                          </Suspense>
                        }
                      />
                    </Route>
                  )}
                  {seller.role === EnumSellerRole.seller && (
                    <Route path="products-toop-drop">
                      <Route
                        index
                        element={
                          <Suspense
                            fallback={
                              <div className="loader-container">
                                <div className="loader"></div>
                              </div>
                            }
                          >
                            <ListProductsToopDrop />
                          </Suspense>
                        }
                      />
                      <Route
                        path=":id"
                        element={
                          <Suspense
                            fallback={
                              <div className="loader-container">
                                <div className="loader"></div>
                              </div>
                            }
                          >
                            <SingleProductToopDrop />
                          </Suspense>
                        }
                      />
                    </Route>
                  )}
                  {seller.role === EnumSellerRole.seller && (
                    <Route path="products-normal-seller">
                      <Route
                        index
                        element={
                          <Suspense
                            fallback={
                              <div className="loader-container">
                                <div className="loader"></div>
                              </div>
                            }
                          >
                            <ListProductsNormalSeller />
                          </Suspense>
                        }
                      />
                      <Route
                        path=":id"
                        element={
                          <Suspense
                            fallback={
                              <div className="loader-container">
                                <div className="loader"></div>
                              </div>
                            }
                          >
                            <SingleProductNormalSeller />
                          </Suspense>
                        }
                      />
                      <Route
                        path="new"
                        element={
                          <Suspense
                            fallback={
                              <div className="loader-container">
                                <div className="loader"></div>
                              </div>
                            }
                          >
                            <NewProductNormalSeller />
                          </Suspense>
                        }
                      />
                    </Route>
                  )}

                  {seller.role === EnumSellerRole.seller && (
                    <>
                      <Route path="orders-normal-seller">
                        <Route
                          index
                          element={
                            <Suspense
                              fallback={
                                <div className="loader-container">
                                  <div className="loader"></div>
                                </div>
                              }
                            >
                              <ListOrderNormalSeller />
                            </Suspense>
                          }
                        />
                        <Route
                          path=":id"
                          element={
                            <Suspense
                              fallback={
                                <div className="loader-container">
                                  <div className="loader"></div>
                                </div>
                              }
                            >
                              <SingleOrderNormalSeller />
                            </Suspense>
                          }
                        />
                        <Route
                          path="new"
                          element={
                            <Suspense
                              fallback={
                                <div className="loader-container">
                                  <div className="loader"></div>
                                </div>
                              }
                            >
                              <NewOrderNormalSeller />
                            </Suspense>
                          }
                        />
                      </Route>
                      <Route path="orders-toop-drop">
                        <Route
                          index
                          element={
                            <Suspense
                              fallback={
                                <div className="loader-container">
                                  <div className="loader"></div>
                                </div>
                              }
                            >
                              <ListOrderToopDrop />
                            </Suspense>
                          }
                        />
                        <Route
                          path=":id"
                          element={
                            <Suspense
                              fallback={
                                <div className="loader-container">
                                  <div className="loader"></div>
                                </div>
                              }
                            >
                              <SingleOrderToopDrop />
                            </Suspense>
                          }
                        />
                        <Route
                          path="new"
                          element={
                            <Suspense
                              fallback={
                                <div className="loader-container">
                                  <div className="loader"></div>
                                </div>
                              }
                            >
                              <NewOrderToopDrop />
                            </Suspense>
                          }
                        />
                      </Route>
                    </>
                  )}
                  {seller.role === EnumSellerRole.affiliate && (
                    <Route path="orders-affiliate-seller">
                      <Route
                        index
                        element={
                          <Suspense
                            fallback={
                              <div className="loader-container">
                                <div className="loader"></div>
                              </div>
                            }
                          >
                            <ListOrderAffiliateSeller />
                          </Suspense>
                        }
                      />
                      <Route
                        path=":id"
                        element={
                          <Suspense
                            fallback={
                              <div className="loader-container">
                                <div className="loader"></div>
                              </div>
                            }
                          >
                            <SingleOrderAffiliateSeller />
                          </Suspense>
                        }
                      />
                      <Route
                        path="new"
                        element={
                          <Suspense
                            fallback={
                              <div className="loader-container">
                                <div className="loader"></div>
                              </div>
                            }
                          >
                            <NewOrderAffiliateSeller />
                          </Suspense>
                        }
                      />
                    </Route>
                  )}

                  {seller.role === EnumSellerRole.seller && (
                    <Route path="sourcings">
                      <Route
                        index
                        element={
                          <Suspense
                            fallback={
                              <div className="loader-container">
                                <div className="loader"></div>
                              </div>
                            }
                          >
                            <ListSourcing />
                          </Suspense>
                        }
                      />
                      <Route
                        path=":id"
                        element={
                          <Suspense
                            fallback={
                              <div className="loader-container">
                                <div className="loader"></div>
                              </div>
                            }
                          >
                            <SingleSourcing />
                          </Suspense>
                        }
                      />
                      <Route
                        path="new"
                        element={
                          <Suspense
                            fallback={
                              <div className="loader-container">
                                <div className="loader"></div>
                              </div>
                            }
                          >
                            <NewSourcing />
                          </Suspense>
                        }
                      />
                    </Route>
                  )}

                  <Route path="invoices-normal-seller">
                    <Route
                      index
                      element={
                        <Suspense
                          fallback={
                            <div className="loader-container">
                              <div className="loader"></div>
                            </div>
                          }
                        >
                          <ListInvoiceNormalSeller />
                        </Suspense>
                      }
                    />
                  </Route>
                  <Route path="invoices-toop-drop">
                    <Route
                      index
                      element={
                        <Suspense
                          fallback={
                            <div className="loader-container">
                              <div className="loader"></div>
                            </div>
                          }
                        >
                          <ListInvoiceToopDrop />
                        </Suspense>
                      }
                    />
                  </Route>
                  <Route path="payments">
                    <Route
                      index
                      element={
                        <Suspense
                          fallback={
                            <div className="loader-container">
                              <div className="loader"></div>
                            </div>
                          }
                        >
                          <ListPayments />
                        </Suspense>
                      }
                    />
                    <Route
                      path=":id"
                      element={
                        <Suspense
                          fallback={
                            <div className="loader-container">
                              <div className="loader"></div>
                            </div>
                          }
                        >
                          <SinglePayment />
                        </Suspense>
                      }
                    />
                  </Route>
                  <Route path="pricing">
                    <Route
                      index
                      element={
                        <Suspense
                          fallback={
                            <div className="loader-container">
                              <div className="loader"></div>
                            </div>
                          }
                        >
                          <Pricing />
                        </Suspense>
                      }
                    />
                  </Route>

                  <Route path="simulation">
                    <Route
                      index
                      element={
                        <Suspense
                          fallback={
                            <div className="loader-container">
                              <div className="loader"></div>
                            </div>
                          }
                        >
                          <Simulation />
                        </Suspense>
                      }
                    />
                  </Route>
                  <Route
                    path="/settings"
                    element={
                      <Suspense
                        fallback={
                          <div className="loader-container">
                            <div className="loader"></div>
                          </div>
                        }
                      >
                        <Settings />
                      </Suspense>
                    }
                  >
                    <Route index element={<Navigate to="general" replace />} />
                    <Route
                      path="general"
                      element={
                        <Suspense
                          fallback={
                            <div className="loader-container">
                              <div className="loader"></div>
                            </div>
                          }
                        >
                          <GeneralSettings />
                        </Suspense>
                      }
                    />
                    <Route
                      path="information"
                      element={
                        <Suspense
                          fallback={
                            <div className="loader-container">
                              <div className="loader"></div>
                            </div>
                          }
                        >
                          <InformationsSettings />
                        </Suspense>
                      }
                    />
                    <Route
                      path="integration"
                      element={
                        <Suspense
                          fallback={
                            <div className="loader-container">
                              <div className="loader"></div>
                            </div>
                          }
                        >
                          <IntegrationSettings />
                        </Suspense>
                      }
                    />
                  </Route>
                  <Route
                    path="*"
                    element={
                      <Suspense
                        fallback={
                          <div className="loader-container">
                            <div className="loader"></div>
                          </div>
                        }
                      >
                        <NotFound />
                      </Suspense>
                    }
                  />
                </Route>
              </Routes>
            </div>
          </ErrorBoundary>
          <Suspense fallback={<div></div>}>
            <ToastContainer
              position="bottom-left"
              autoClose={3000}
              hideProgressBar={true}
              limit={3}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </Suspense>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
