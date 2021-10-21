const jwt = require("jsonwebtoken");
const { Company } = require("../../models");
module.exports = async (req, res) => {
  let companiesInfo = await Company.findOne({
    where: { userId: req.body.userId },
  });
  if (companiesInfo === null) {
    Company.create({
      password: req.body.password,
      userId: req.body.userId,
      question: req.body.question,
      name: req.body.name,
      location:req.body.location,
      businessNumber: req.body.businessNumber,
    });

    res.status(200).json({ message: "회원가입에 성공하셨습니다." });
  } else {
    res.status(404).send("중복된 아이디가 있습니다.");
  }
 
};
