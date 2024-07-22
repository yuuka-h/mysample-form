import { useRouter } from "next/router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Box, TextField, Button, Chip, Checkbox, Step, StepLabel, Stepper } from "@mui/material";
import yup from "../yup.locale";
import { steps } from "./kiyaku";

const SignupSchema = yup.object().shape({
  media: yup.array().label("").min(1).required("１つ以上選択してください"),
  fruits: yup.array().label("果物").max(3),
});

export default function Second() {
  const router = useRouter();

  const handleBack = () => {
    // 戻るボタンが押されたときの処理
    console.log("Back button clicked");
    router.push({
      pathname: `./first_form`, // 遷移先のページ
      query: {
        name: router.query.name,
        age: router.query.age,
        gendar: router.query.gendar,
        postNum: router.query.postNum,
        pref: router.query.pref,
        city: router.query.city,
        address: router.query.address,
        building: router.query.building,
        tel: router.query.tel,
      },
    });
  };

  return (
    <div>
      <div className="bg_pattern Paper_v2"></div>
      <Formik
        initialValues={{
          media: router.query.media,
          media_other: router.query.media_other,
          fruits: router.query.fruits,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          // 次へボタンが押されたときの処理
          console.log("Next button clicked");

          router.push({
            pathname: `./confirm_form`, // 遷移先のページ
            query: {
              name: router.query.name,
              age: router.query.age,
              gendar: router.query.gendar,
              postNum: router.query.postNum,
              pref: router.query.pref,
              city: router.query.city,
              address: router.query.address,
              building: router.query.building,
              tel: router.query.tel,
              media: values.media,
              media_other: values.media_other,
              fruits: values.fruits,
            },
          });
        }}
      >
        {({ isValid }) => (
          <Form>
            <div className="text-center mb-10">
              <h1 className="font-bold text-xl mt-5">会員登録</h1>
              <br />
              <Box sx={{ width: "100%" }} className="my-3 mx-1">
                <Stepper activeStep={2} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel className="text-xs">{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </div>

            <Box>
              <div className="flex justify-center flex-col mx-8 mb-5">
                <label htmlFor="media">
                  どこでこのサイトを知りましたか？
                  <Chip
                    label="必須"
                    color="primary"
                    size="small"
                    className="mb-1 mx-1"
                  />
                </label>
                <label>
                  <Field as={Checkbox} type="checkbox" name="media" value="sns" />
                  ＳＮＳ
                </label>
                <label>
                  <Field as={Checkbox} type="checkbox" name="media" value="tvcm" />
                  ＴＶ　ＣＭ
                </label>
                <label>
                  <Field as={Checkbox} type="checkbox" name="media" value="magazine" />
                  雑誌
                </label>
                <label>
                  <Field as={Checkbox} type="checkbox" name="media" value="newspaper" />
                  新聞
                </label>
                <label>
                  <Field as={Checkbox} type="checkbox" name="media" value="other" />
                  その他
                </label>
                <Field
                  as={TextField}
                  type="text"
                  id="media_other"
                  name="media_other"
                  variant="outlined"
                  className="w-64 mx-2 bg-white"
                />
                <ErrorMessage name="media">
                  {(msg) => <div className="text-red-600">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="flex justify-center flex-col mx-8 mb-5">
                <label htmlFor="fruits">
                  好きな果物を教えてください
                  <Chip
                    label="任意"
                    size="small"
                    className="mb-1 mx-1"
                    variant="outlined"
                  />
                </label>
                <p className="text-xs text-gray-400">
                  （最大３つまで選択可能です）
                </p>
                <label>
                  <Field as={Checkbox} type="checkbox" name="fruits" value="apple" />
                  りんご
                </label>
                <label>
                  <Field as={Checkbox} type="checkbox" name="fruits" value="mikan" />
                  みかん
                </label>
                <label>
                  <Field as={Checkbox} type="checkbox" name="fruits" value="banana" />
                  バナナ
                </label>
                <label>
                  <Field as={Checkbox} type="checkbox" name="fruits" value="grape" />
                  ぶどう
                </label>
                <label>
                  <Field as={Checkbox} type="checkbox" name="fruits" value="lemon" />
                  レモン
                </label>
                <label>
                  <Field as={Checkbox} type="checkbox" name="fruits" value="kiwi" />
                  キウイ
                </label>
                <ErrorMessage name="fruits">
                  {(msg) => <div className="text-red-600">{msg}</div>}
                </ErrorMessage>
              </div>
            </Box>
            <Box display="flex" justifyContent="center" gap={2} mt={2} mb={5}>
              <Button variant="outlined" onClick={handleBack} className="bg-white">
                戻る
              </Button>
              <Button
                variant="contained"
                type="submit"
                disabled={!isValid}
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
