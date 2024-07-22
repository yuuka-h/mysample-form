import { Formik, Field, Form, ErrorMessage } from "formik";
import yup from "../yup.locale";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { useRouter } from "next/router";
import localImage from "../../public/TOP.png";
import Image from "next/image";

const SignupSchema = yup.object().shape({
  kiyaku_check: yup
    .boolean()
    .oneOf([true], "※利用規約に同意する必要があります"),
});

export const steps = [
  "利用規約",
  "会員情報入力１",
  "会員情報入力２",
  "入力内容確認",
  "完了",
];

export default function Kiyaku() {
  const router = useRouter();

  return (
    <div>
      {/* <header className="header-2">
        <div className="header-inner">
          <Image src={localImage} alt="銀行イメージ" placeholder="blur"/>
          <a className="icon" href="#" title="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </header> */}

      <div className="bg_pattern Paper_v2"></div>
      <Formik
        initialValues={{
          kiyaku_check: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          router.push("./first_form");
        }}
      >
        {({ isValid, dirty }) => (
          <Form>
            <div className="text-center">
              <h1 className="font-bold text-xl mt-5">会員登録</h1>
              <br />
              <Box sx={{ width: "100%" }} className="my-2 mx-1">
                <Stepper activeStep={0} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel className="text-xs">{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </div>
            <div className="flex justify-center items-center">
              <Box
                sx={{
                  overflow: "auto",
                  border: 2,
                  borderRadius: 1,
                  margin: 2,
                  padding: 1,
                  width: "80%",
                  height: "300px",
                }}
                className="bg-white"
              >
                <span className="font-bold text-lg py-1">利用規約</span>
                <br />
                　この利用規約（以下，「本規約」といいます。）は，はなまる銀行（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
                <br />
                <span className="font-bold">第1条（適用）</span>
                <br />
                　本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
                <br />
                　当社は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
                <br />
                　本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
                <br />
                <span className="font-bold">第2条（利用登録）</span>
                <br />
                　本サービスにおいては，登録希望者が本規約に同意の上，当社の定める方法によって利用登録を申請し，当社がこれを承認することによって，利用登録が完了するものとします。
                <br />
                　当社は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
                <br />
                <ol>
                  <li>・利用登録の申請に際して虚偽の事項を届け出た場合</li>
                  <li>・本規約に違反したことがある者からの申請である場合</li>
                  <li>・その他，当社が利用登録を相当でないと判断した場合</li>
                </ol>
                <br />
                <span className="font-bold">
                  第3条（ユーザーIDおよびパスワードの管理）
                </span>
                <br />
                　ユーザーは，自己の責任において，本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
                <br />
                　ユーザーは，いかなる場合にも，ユーザーIDおよびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。当社は，ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には，そのユーザーIDを登録しているユーザー自身による利用とみなします。
                <br />
                　ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は，当社に故意又は重大な過失がある場合を除き，当社は一切の責任を負わないものとします。
                <br />
              </Box>
            </div>
            <div className="flex justify-center items-center">
              <label>
                <Field type="checkbox" name="kiyaku_check" />
                　利用規約に同意しました
              </label>
              <br />
            </div>
            <div className="flex justify-center items-center">
              <ErrorMessage name="kiyaku_check">
                {(msg) => <div className="text-red-600 text-sm">{msg}</div>}
              </ErrorMessage>
            </div>
            <Box display="flex" justifyContent="center" gap={2} mt={2}>
              <Button
                variant="contained"
                type="submit"
                disabled={!(isValid && dirty)}
                className="disabled:bg-gray-200"
              >
                次へ
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
}
