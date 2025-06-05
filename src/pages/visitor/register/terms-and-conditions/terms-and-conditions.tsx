import "./terms-and-conditions.scss";
import { Dialog, DialogActions, DialogContent, Checkbox } from "@mui/material";
import { useTranslation } from "react-i18next";
import "utils/i18n";
// import languageIcon from "../../assets/language.svg";

// import { useDispatch, useSelector } from "react-redux";

import logo from "assets/logo.svg";
import ReactMarkdown from "react-markdown";

// type LngRet = { [lng: string]: { nativeName: string } };

const TermsAndConditions = ({ open, onClose }) => {
  // const seller = useSelector((state: any) => state.seller.currentUser.details);

  // const [check, setCheck] = useState(data?.isAcceptTerm || false);
  // const [scrollBottom, setScrollBottom] = useState(false);
  // const [open, setOpen] = useState(true);
  // const scrollRef=useRef<HTMLDivElement|null>(null)
  // const scrollPositionRef=useRef<number>(0);
  // const [scrollTop, setScrollTop] = useState(0);

  // const handleScroll = (event: any) => {
  //   if (
  //     event.currentTarget.scrollTop + event.currentTarget.clientHeight >=
  //     event.currentTarget.scrollHeight
  // ) {
  // setScrollBottom(true)
  // }
  // };

  // useEffect(() => {
  //     if (scrollRef.current) {
  //       scrollRef.current.scrollTop = scrollPositionRef.current;
  //     }
  //   }, [check]);

  // const handleAccept = (accept: boolean) => {
  //   setOpen(false);
  //   if (accept) {
  //     handleNext({ isAcceptTerm: accept });
  //   } else handleBack();
  // };
  const { t } = useTranslation();
  // const [lngs, setLngs] = useState<LngRet>({
  //     en: { nativeName: "En" },
  //     ar: { nativeName: "Ar" },
  // });
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setCheck(!check);
  // };
  // const TermsAndConditionsBody = () =>

  return (
    <Dialog open={open} onClose={onClose} maxWidth={false}>
      {/* <DialogTitle>{"terms and condition"}</DialogTitle> */}
      <DialogContent>
        <div className="dialog">
          <div className="container">
            <div className="header">
              {/* <div className="language">
                        <img
                            src={languageIcon}
                            alt=""
                            onClick={() =>
                                i18n.changeLanguage(
                                    Object.keys(lngs)[
                                    1 - Object.keys(lngs).indexOf(i18n.resolvedLanguage)
                                    ]
                                )
                            }
                        />
                    </div> */}
              <h3>{t("terms and conditions")}</h3>

              <div className="close-dialog">
                <img src={logo} alt="" />
              </div>
            </div>
            <div
              className="body"
              // onScroll={handleScroll}
              //  ref={scrollRef}
            >
              <h4>{t("sourcing")}</h4>
              <p>
                <ReactMarkdown>{t("term2")}</ReactMarkdown>
              </p>
              <p>
                <ReactMarkdown>{t("term15")}</ReactMarkdown>
              </p>
              <p>
                <ReactMarkdown>{t("term16")}</ReactMarkdown>
              </p>
              <p>
                <ReactMarkdown>{t("term17")}</ReactMarkdown>
              </p>

              <h4>{t("orders")}</h4>
              <p>
                <ReactMarkdown>{t("term3")}</ReactMarkdown>
              </p>
              <p>
                <ReactMarkdown>{t("term4")}</ReactMarkdown>
              </p>

              <p>
                <ReactMarkdown>{t("term5")}</ReactMarkdown>
              </p>
              <p>
                <ReactMarkdown>{t("term6")}</ReactMarkdown>
              </p>
              <p>
                <ReactMarkdown>{t("term8")}</ReactMarkdown>
              </p>
              <p>
                <ReactMarkdown>{t("term18")}</ReactMarkdown>
              </p>

              <h4>{t("fees")}</h4>
              <p>
                <ReactMarkdown>{t("term7")}</ReactMarkdown>
              </p>
              <p>
                <ReactMarkdown>{t("term9")}</ReactMarkdown>
              </p>
              <p>
                <ReactMarkdown>{t("term10")}</ReactMarkdown>
              </p>
              <p>
                <ReactMarkdown>{t("term11")}</ReactMarkdown>
              </p>

              <p>
                <div>
                  {" "}
                  <ReactMarkdown>{t("term12-1")}</ReactMarkdown>
                </div>
                <div>
                  {" "}
                  <ReactMarkdown>{t("term12-2")}</ReactMarkdown>
                </div>
              </p>
              <p>
                <ReactMarkdown>{t("term13")}</ReactMarkdown>
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default TermsAndConditions;
