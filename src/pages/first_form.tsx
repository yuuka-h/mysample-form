import { Formik, Field, Form, ErrorMessage } from "formik";
import { Box, TextField, Button, Chip, Stepper, Step, StepLabel } from "@mui/material";
import { useRouter } from "next/router";
import yup from "../yup.locale";
import { steps } from './kiyaku';
import axios from 'axios'
import { useState } from "react";

const SignupSchema = yup.object().shape({
  name: yup.string().label("氏名").required(),
  age: yup.number().label("年齢").required(),
  gendar: yup.string().label("性別").required(),
  postNum: yup.string().label("郵便番号").max(7).required(),
  pref: yup.string().label("都道府県").required(),
  city: yup.string().label("市区町村").required(),
  address: yup.string().label("番地等").required(),
  building: yup.string().label("建物名・部屋番号"),
  tel: yup.string().label("電話番号").max(11).required(),
});

export default function First_Forms() {
  const router = useRouter();
  
  // const [zipCode, setZipCode] = useState("");
  // const [pref, setPref] = useState("");
  // const [city, setCity] = useState("");
  // const [address, setAddress] = useState("");
  // const getAddress = async (): Promise<void> => {
  //   console.log("router.query.postNum: " + router.query.postNum);
  //   const res = await axios.get("https://zipcloud.ibsnet.co.jp/api/search", {
  //     params: { zipcode: zipCode}, 
  //   });
  //   console.log(res);    // 中身確認用
  //   if (res.data.status === 200) {
  //     setPref(res.data.results[0].address1);
  //     setCity(res.data.results[0].address2);
  //     setAddress(res.data.results[0].address3);
      
  //   } else {
  //     console.log("住所取得APIの実行に失敗しました。");
  //   }
  // }


  return (
    <div>
      <Formik
        initialValues={{
          name: router.query.name,
          age: router.query.age,
          gendar: router.query.gendar,
          postNum: router.query.postNum,
          pref: router.query.pref,
          city: router.query.city,
          address: router.query.address,
          building: router.query.building,
          tel: router.query.tel,
        }}
        enableReinitialize={true}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log({ values, actions });

          router.push({
            pathname: `./second_form`, // 遷移先のページ
            query: {
              name: values.name,
              age: values.age,
              gendar: values.gendar,
              postNum: values.postNum,
              pref: values.pref,
              city: values.city,
              address: values.address,
              building: values.building,
              tel: values.tel,
            },
          });
        }}
      >
        {({ isValid }) => (
          <Form>
            <div className="bg_pattern Paper_v2"></div>
            <div className="text-center mb-10">
              <h1 className="font-bold text-xl mt-5">会員登録</h1>
              <br />
              <Box sx={{ width: "100%" }} className="my-3 mx-1">
                <Stepper activeStep={1} alternativeLabel>
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
                <label htmlFor="name">
                  氏名
                  <Chip
                    label="必須"
                    color="primary"
                    size="small"
                    className="mb-1 mx-1"
                  />
                </label>
                <Field
                  as={TextField}
                  type="text"
                  id="name"
                  name="name"
                  variant="outlined"
                  className="bg-white"
                />
                <ErrorMessage name="name">
                  {(msg) => <div className="text-red-600">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="flex justify-center flex-col mx-8 mb-5">
                <label htmlFor="age">
                  年齢
                  <Chip
                    label="必須"
                    color="primary"
                    size="small"
                    className="mb-1 mx-1"
                  />
                </label>
                <Field
                  as={TextField}
                  type="number"
                  id="age"
                  name="age"
                  variant="outlined"
                  className="bg-white"
                />
                <ErrorMessage name="age">
                  {(msg) => <div className="text-red-600">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="flex justify-center flex-col mx-8 mb-5">
                <label htmlFor="gendar">
                  性別
                  <Chip
                    label="必須"
                    color="primary"
                    size="small"
                    className="mb-1 mx-1"
                  />
                </label>
                <Box display="flex" justifyContent="start" gap={2} mt={2}>
                  <label>
                    <Field type="radio" name="gendar" value="male" />
                    男性
                  </label>
                  <label>
                    <Field type="radio" name="gendar" value="female" />
                    女性
                  </label>
                  <label>
                    <Field type="radio" name="gendar" value="none" />
                    選択しない
                  </label>
                </Box>
                <ErrorMessage name="gendar">
                  {(msg) => <div className="text-red-600">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="flex justify-center flex-col mx-8 mb-5">
                <label htmlFor="postNum">
                  郵便番号
                  <Chip
                    label="必須"
                    color="primary"
                    size="small"
                    className="mb-1 mx-1"
                  />
                </label>
                <Field
                  as={TextField}
                  type="number"
                  id="postNum"
                  name="postNum"
                  variant="outlined"
                  className="bg-white"
                  // value={zipCode}
                  // onChange={(event:any) => setZipCode(event.target.value)}
                />
                <p className="text-xs text-gray-400">
                  ハイフンなし７桁で入力してください
                </p>
                <ErrorMessage name="postNum">
                  {(msg) => <div className="text-red-600">{msg}</div>}
                </ErrorMessage>
              </div>
              {/* <Button onClick={getAddress} variant="contained">自動入力</Button> */}

              <div className="flex justify-center flex-col mx-8 mb-5">
                <label htmlFor="pref">
                  都道府県
                  <Chip
                    label="必須"
                    color="primary"
                    size="small"
                    className="mb-1 mx-1"
                  />
                </label>
                <Field
                  as="select"
                  name="pref"
                  className="h-14 rounded outline outline-1 outline-gray-400 py-2 px-2 bg-white"
                  // value={pref}
                  // onChange={(event:any) => setPref(event.target.value)}
                >
                  {prefectures.map((pref) => (
                    <option key={pref} value={pref}>
                      {pref}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="pref">
                  {(msg) => <div className="text-red-600">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="flex justify-center flex-col mx-8 mb-5">
                <label htmlFor="city">
                  市区町村
                  <Chip
                    label="必須"
                    color="primary"
                    size="small"
                    className="mb-1 mx-1"
                  />
                </label>
                <Field
                  as={TextField}
                  type="text"
                  id="city"
                  name="city"
                  variant="outlined"
                  className="bg-white"
                  // value={city}
                  // onChange={(event:any) => setCity(event.target.value)}
                />
                <ErrorMessage name="city">
                  {(msg) => <div className="text-red-600">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="flex justify-center flex-col mx-8 mb-5">
                <label htmlFor="address">
                  番地等
                  <Chip
                    label="必須"
                    color="primary"
                    size="small"
                    className="mb-1 mx-1"
                  />
                </label>
                <Field
                  as={TextField}
                  type="text"
                  id="address"
                  name="address"
                  variant="outlined"
                  className="bg-white"
                  // value={address}
                  // onChange={(event:any) => setAddress(event.target.value)}
                />
                <ErrorMessage name="address">
                  {(msg) => <div className="text-red-600">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="flex justify-center flex-col mx-8 mb-5">
                <label htmlFor="building">
                  建物名・部屋番号
                  <Chip
                    label="任意"
                    size="small"
                    className="mb-1 mx-1"
                    variant="outlined"
                  />
                </label>
                <Field
                  as={TextField}
                  type="text"
                  id="building"
                  name="building"
                  variant="outlined"
                  className="bg-white"
                />
                <ErrorMessage name="building">
                  {(msg) => <div className="text-red-600">{msg}</div>}
                </ErrorMessage>
              </div>

              <div className="flex justify-center flex-col mx-8 mb-5">
                <label htmlFor="tel">
                  電話番号
                  <Chip
                    label="必須"
                    color="primary"
                    size="small"
                    className="mb-1 mx-1"
                  />
                </label>
                <Field
                  as={TextField}
                  type="text"
                  id="tel"
                  name="tel"
                  variant="outlined"
                  className="bg-white"
                />
                <p className="text-xs text-gray-400">
                  ハイフンなしで入力してください
                </p>
                <ErrorMessage name="tel">
                  {(msg) => <div className="text-red-600">{msg}</div>}
                </ErrorMessage>
              </div>
            </Box>
            <Box display="flex" justifyContent="center" gap={2} mt={2} mb={5}>
              <Button
                variant="contained"
                type="submit"
                disabled={!(isValid)}
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

const prefectures = [
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
];
