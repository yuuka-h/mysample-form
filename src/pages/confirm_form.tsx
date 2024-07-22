import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { steps } from "./kiyaku";

export default function Confirm() {
  const router = useRouter();

  const handleBack = () => {
    // 戻るボタンが押されたときの処理
    console.log("Back button clicked");
    router.push({
      pathname: `./second_form`, // 遷移先のページ
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
        media: router.query.media,
        media_other: router.query.media_other,
        fruits: router.query.fruits,
      },
    });
  };

  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={() => {
          // 次へボタンが押されたときの処理
          console.log("Next button clicked");
          router.push({
            pathname: `./complete`, // 遷移先のページ
          });
        }}
      >
        {({}) => (
          <Form>
            <div className="bg_pattern Paper_v2"></div>
            <div className="text-center">
              <h1 className="font-bold text-xl mt-5">会員登録</h1>
              <br />
              <Box sx={{ width: "100%" }} className="mt-3 mx-1 mb-10">
                <Stepper activeStep={3} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel className="text-xs">{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
            </div>

            <div className="border-2 border-gray-400 rounded-md my-5 mx-5 pt-5 bg-white">
              <div className="text-start mx-10">
                <label className="text-sm mt-5 text-gray-600">氏名</label>
                <br />
                <p className="text-xl mb-5">{router.query.name}</p>
              </div>

              <div className="text-start mx-10">
                <label className="text-sm mt-5 text-gray-600">年齢</label>
                <br />
                <p className="text-xl mb-5">{router.query.age} 歳</p>
              </div>

              <div className="text-start mx-10">
                <label className="text-sm mt-5 text-gray-600">性別</label>
                <br />
                <p className="text-xl mb-5">
                  {gendar_obj[String(router.query.gendar)]}
                </p>
              </div>

              <div className="text-start mx-10">
                <label className="text-sm mt-5 text-gray-600">郵便番号</label>
                <br />
                <p className="text-xl mb-5">
                  {String(router.query.postNum).substring(0, 3) +
                    "-" +
                    String(router.query.postNum).substring(3, 7)}
                </p>
              </div>

              <div className="text-start mx-10">
                <label className="text-sm mt-5 text-gray-600">都道府県</label>
                <br />
                <p className="text-xl mb-5">{router.query.pref}</p>
              </div>

              <div className="text-start mx-10">
                <label className="text-sm mt-5 text-gray-600">市区町村</label>
                <br />
                <p className="text-xl mb-5">{router.query.city}</p>
              </div>

              <div className="text-start mx-10">
                <label className="text-sm mt-5 text-gray-600">番地等</label>
                <br />
                <p className="text-xl mb-5">{router.query.address}</p>
              </div>

              <div className="text-start mx-10">
                <label className="text-sm mt-5 text-gray-600">
                  建物名・部屋番号
                </label>
                <br />
                <p className="text-xl mb-5">
                  {router.query.building == ""
                    ? "（入力なし）"
                    : router.query.building}
                </p>
              </div>

              <div className="text-start mx-10">
                <label className="text-sm mt-5 text-gray-600">電話番号</label>
                <br />
                <p className="text-xl mb-5">{router.query.tel}</p>
              </div>

              <div className="text-start mx-10">
                <label className="text-sm mt-5 text-gray-600">
                  どこでこのサイトを知りましたか？
                </label>
                <br />
                <p className="text-xl mb-5">
                  {Array.isArray(router.query.media)
                    ? router.query.media
                        .map((media: string) =>
                          media_obj[media] == "その他"
                            ? media_obj[media] +
                              "(" +
                              router.query.media_other +
                              ")"
                            : media_obj[media]
                        )
                        .join("、 ")
                    : router.query.media!=undefined ? media_obj[router.query.media]:""
                    }
                </p>
              </div>

              <div className="text-start mx-10">
                <label className="text-sm mt-5 text-gray-600">
                  好きな果物を教えてください
                </label>
                <br />
                <p className="text-xl mb-10">
                  {Array.isArray(router.query.fruits)
                    ? router.query.fruits
                        .map((fruit: string) => fruit_obj[fruit])
                        .join("、 ")
                    : "(選択なし)"}
                </p>
              </div>
            </div>
            <Box display="flex" justifyContent="center" gap={2} mt={3} mb={5}>
              <Button variant="outlined" onClick={handleBack} className="bg-white">
                戻る
              </Button>
              <Button variant="contained" type="submit">
                登録する
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
}
const media_obj: { [key: string]: string } = {
  sns: "SNS",
  tvcm: "TV CM",
  magazine: "雑誌",
  newspaper: "新聞",
  other: "その他",
};
const fruit_obj: { [key: string]: string } = {
  apple: "りんご",
  mikan: "みかん",
  banana: "バナナ",
  grape: "ぶどう",
  lemon: "レモン",
  kiwi: "キウイ",
};

const gendar_obj: { [key: string]: string } = {
  male: "男",
  female: "女",
  none: "選択しない",
};
