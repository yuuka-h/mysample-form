// describe("利用規約画面", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000");
//     cy.get("Button[type=submit]").as("submitBtn");
//   });
//   it("タイトルが表示されていること", () => {
//     cy.contains("span", "利用規約").should("exist");
//   });
//   it("同意チェックを押すと次へボタンが活性化する", () => {
//     cy.get("@submitBtn").should("be.disabled");
//     cy.contains("label", "利用規約に同意しました")
//       .find("input[type=checkbox]")
//       .should("not.be.checked");
//     cy.contains("label", "利用規約に同意しました").click();
//     cy.get("@submitBtn").should("be.enabled");
//   });
//   it("同意して次の画面に遷移すること", () => {
//     cy.contains("label", "利用規約に同意しました").click();
//     cy.get("@submitBtn").click();
//     cy.contains("span", "会員情報入力１").should("exist");
//   });
// });

// describe("会員情報入力画面１", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000/first_form");
//     cy.get('Button[type=submit]').as('submitBtn');
//   });

//  it('未入力状態で次へを押下するとエラーになること',()=>{
//   cy.get('@submitBtn').click();
//   cy.contains("div", "氏名は必須の入力項目です").should("exist");
//   cy.contains("div", "年齢は必須の入力項目です").should("exist");
//   cy.contains("div", "性別は必須の入力項目です").should("exist");
//   cy.contains("div", "郵便番号は必須の入力項目です").should("exist");
//   cy.contains("div", "都道府県は必須の入力項目です").should("exist");
//   cy.contains("div", "市区町村は必須の入力項目です").should("exist");
//   cy.contains("div", "番地等は必須の入力項目です").should("exist");
//   cy.contains("div", "電話番号は必須の入力項目です").should("exist");
//  })

//   it("正常値を入力するとエラーが消えること（氏名）", () => {
//     cy.get('@submitBtn').click();
//     cy.contains("div", "氏名は必須の入力項目です").should("exist");
//     cy.get('input[name="name"]').type("山田太郎");
//     cy.get('input[name="name"]').blur();//フォーカスアウト
//     cy.contains("div", "氏名は必須の入力項目です").should("not.exist");
//   });

//   it("正常値を入力するとエラーが消えること（年齢）", () => {
//     cy.get('@submitBtn').click();
//     cy.contains("div", "年齢は必須の入力項目です").should("exist");
//     cy.get('input[name="age"]').type("30");
//     cy.get('input[name="age"]').blur();//フォーカスアウト
//     cy.contains("div", "年齢は必須の入力項目です").should("not.exist");
//   });

//   it("正常値を入力するとエラーが消えること（性別）", () => {
//     cy.get('@submitBtn').click();
//     cy.contains("div", "性別は必須の入力項目です").should("exist");
//     cy.get('[type="radio"]').check('male')
//     // cy.get('[type="radio"]').blur();//フォーカスアウト
//     cy.contains("div", "性別は必須の入力項目です").should("not.exist");
//   });

//   it("正常値を入力するとエラーが消えること（郵便番号）", () => {
//     cy.get('@submitBtn').click();
//     cy.contains("div", "郵便番号は必須の入力項目です").should("exist");
//     cy.get('input[name="postNum"]').type("1000001");
//     cy.get('input[name="postNum"]').blur();//フォーカスアウト
//     cy.contains("div", "郵便番号は必須の入力項目です").should("not.exist");
//   });

//   it("正常値を入力するとエラーが消えること（都道府県）", () => {
//     cy.get('@submitBtn').click();
//     cy.contains("div", "都道府県は必須の入力項目です").should("exist");
//     cy.get('select[name="pref"]').select("東京都")
//     cy.get('select[name="pref"]').blur();//フォーカスアウト
//     cy.contains("div", "都道府県は必須の入力項目です").should("not.exist");
//   });

//   it("正常値を入力するとエラーが消えること（市区町村）", () => {
//     cy.get('@submitBtn').click();
//     cy.contains("div", "市区町村は必須の入力項目です").should("exist");
//     cy.get('input[name="city"]').type("千代田区");
//     cy.get('input[name="city"]').blur();//フォーカスアウト
//     cy.contains("div", "市区町村は必須の入力項目です").should("not.exist");
//   });

//   it("正常値を入力するとエラーが消えること（番地等）", () => {
//     cy.get('@submitBtn').click();
//     cy.contains("div", "番地等は必須の入力項目です").should("exist");
//     cy.get('input[name="address"]').type("千代田１－１－１");
//     cy.get('input[name="address"]').blur();//フォーカスアウト
//     cy.contains("div", "番地等は必須の入力項目です").should("not.exist");
//   });

//   it("正常値を入力するとエラーが消えること（電話番号）", () => {
//     cy.get('@submitBtn').click();
//     cy.contains("div", "電話番号は必須の入力項目です").should("exist");
//     cy.get('input[name="tel"]').type("09012345678");
//     cy.get('input[name="tel"]').blur();//フォーカスアウト
//     cy.contains("div", "電話番号は必須の入力項目です").should("not.exist");
//   });
  
//   it("『次へ』を押すと『会員情報入力２』の画面に遷移すること", () => {
//     //年齢
//     cy.get('input[name="name"]').type("山田太郎");
//     //年齢
//     cy.get('input[name="age"]').type("30");
//     //性別
//     cy.get('[type="radio"]').check('male')
//     //郵便番号
//     cy.get('input[name="postNum"]').type("1000001");
//     //都道府県
//     cy.get('select[name="pref"]').select("東京都");
//     //市区町村
//     cy.get('input[name="city"]').type("千代田区");
//     //番地等
//     cy.get('input[name="address"]').type("千代田１－１");
//     //建物名・部屋番号
//     cy.get('input[name="building"]').type("CHIYODAヒルズ1002");
//     //電話番号
//     cy.get('input[name="tel"]').type("09012345678");
//     cy.get('@submitBtn').click();//次へクリック
//     cy.contains("span", "会員情報入力２").should("exist");
//   });
// });

describe("会員情報入力画面２", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/second_form");
    cy.get('Button[type=submit]').as('submitBtn');
  });

 it('未入力状態で次へを押下するとエラーになること',()=>{
  cy.get('@submitBtn').click();
  cy.contains("div", "１つ以上選択してください").should("exist");
 })

 it('果物を３つ以上選択するとエラーになること',()=>{
  cy.contains("label", "りんご").click();
  cy.contains("label", "みかん").click();
  cy.contains("label", "バナナ").click();
  cy.contains("label", "ぶどう").click();
  cy.contains("div", "果物は3個以下で選択してください").should("exist");
 })
  
  it("『次へ』を押すと『入力内容確認』の画面に遷移すること", () => {
    cy.contains("label", "ＳＮＳ").click();
    cy.contains("label", "その他").click();
    cy.get('input[name="media_other"]').type("Youtube");
    cy.contains("label", "りんご").click();
    cy.contains("label", "みかん").click();
    cy.contains("label", "バナナ").click();

    cy.get('@submitBtn').click();//次へクリック
    cy.contains("span", "入力内容確認").should("exist");
  });
});


describe("入力内容確認画面", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/confirm_form");
    cy.get('Button[type=submit]').as('submitBtn');
  });

  it("『登録する』を押すと『登録完了』の画面に遷移すること", () => {
    cy.get('@submitBtn').click();//次へクリック
    cy.contains("span", "完了").should("exist");
  });
});

describe("登録完了画面", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/complete");
    cy.get('Button').as('submitBtn');
  });

  it("『ログイン画面へ』を押すと遷移すること", () => {
    cy.get('@submitBtn').click();//次へクリック
    cy.contains("h1", "ログイン").should("exist");
  });
});