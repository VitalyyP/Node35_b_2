const { Router } = require("express");

const router = Router();

router.get("/", () => console.log("get all books"));
router.get("/:id", () => console.log("get book"));
router.post("/", () => console.log("add book"));
router.put("/:id", () => console.log("update book"));
router.delete("/:id", () => console.log("delete book"));

module.exports = router;
