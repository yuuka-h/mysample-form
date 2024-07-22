import Link from "next/link";
import { Box,Button, Step, StepLabel, Stepper } from "@mui/material";
import Image from "next/image";
import localImage from "../../public/undraw_Completed_m9ci.png";
import { steps } from "./kiyaku";

export default function Complete() {
  return (
    <div>
      <div className="bg_pattern Paper_v2"></div>
      <div className="text-center">
        <h1 className="font-bold text-xl mt-5">会員登録</h1>
        <br />
        <Box sx={{ width: "100%" }} className="mt-3 mx-1 mb-5">
                <Stepper activeStep={4} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel className="text-xs">{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>
        <Image src={localImage} alt="登録完了イメージ" placeholder="blur"/>
        <p className="text-md mt-10 mb-5">登録が完了しました。</p>
      </div>
      <Box display="flex" justifyContent="center" gap={2} mt={2} mb={5}>
        <Link href="./login"><Button variant="outlined" className="bg-white">ログイン画面へ</Button></Link>
      </Box>
    </div>
  );
}
