import { useRouter } from "next/router";
import { Formik, Form } from "formik";

export default function Login() {
  const router = useRouter();
  return (
    <div>
      <Formik
        initialValues={{
          
        }}
        onSubmit={(values, actions) => {
          router.push({
            pathname: `./complete`, // 遷移先のページ
            query: {
            },
          });
        }}
      >
        {({  }) => (
          <Form>
            <div className="bg_pattern Paper_v2"></div>
            <div className="text-center">
              <h1 className="font-bold text-xl mt-5">ログイン</h1>
              <br />
              <h3 className="text-lg mb-5">ログイン画面です</h3>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
