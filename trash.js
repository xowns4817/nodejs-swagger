const express = require('express');
const router = express.Router();

// https://swagger.io/docs/specification/data-models/data-types/#array 
/**
 * @swagger
 * /trash:
 *   get:
 *     summary: 산책이력 가져오기
 *     tags: [Trash]
 *     parameters:
 *       - in: query
 *         name: sessionKey
 *         type: string
 *         required: true
 *         description: 유저 SessionKey
 *     responses:
 *       200:
 *         description: Success 
 *         schema:
 *          type: object
 *          properties:
 *              trash:
 *                  type: object
 *                  properties:
 *                      id:
 *                          type: number
 *                      user_id:
 *                          type: string
 *                      profile:
 *                          type: string
 *       400:
 *         description: parameter error
 *         schema:
 *             type: object
 *             properties:
 *                 statusCode:
 *                     type: number
 *                     example: 400
 *                 msg:
 *                     type: string
 *                     example: 파라미터 값을 확인해주세요.
 *       404:
 *         description: parameter error
 *         schema:
 *             type: object
 *             properties:
 *                 statusCode:
 *                     type: number
 *                     example: 404
 *                 msg:
 *                     type: string
 *                     example: 요청 url을 확인해 주세요.
 *       500:
 *         description: parameter error
 *         schema:
 *             type: object
 *             properties:
 *                 statusCode:
 *                     type: number
 *                     example: 500
 *                 msg:
 *                     type: string
 *                     example: 서버 오류.
 */
router.get("/", function(req, res) {

    res.send(`id : ${req.query.id}`);
});

/**
 * @swagger
 * /trash:
 *   post:
 *     summary: 산책 이력 등록하기
 *     tags: [Trash]
 *     consumes:
 *      - multipart/form-data
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: formData
 *         name: sessionKey
 *         type: string
 *         required: true
 *       - in: formData
 *         name: trashImg
 *         type: file
 *         description: 산책 인증샷
 *         required: false
 *       - in: formData
 *         name: trash
 *         type: string
 *         required: true
 *         properties:
 *              meta:
 *                  type: object
 *                  properties:
 *                      distance:
 *                          type: number
 *                          description: 산책 거리
 *                      calorie:
 *                          type: number
 *                          description: 소요한 칼로리
 *                      flogging_time:
 *                          type: number
 *                          description: 총 산책 시간
 *              trash_list:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          trash_type:
 *                              type: integer
 *                              description: 쓰레기 종류
 *                          pick_count:
 *                              type: integer
 *                              description: 쓰레기 주운 갯수
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *          type: object
 *          properties:
 *              trash:
 *                  type: object
 *                  properties:
 *                      statusCode:
 *                          type: number
 *                          example: 200
 *                      msg:
 *                          type: string
 *                          example: 산책이력 등록 성공
 *       400:
 *         description: parameter error
 *         schema:
 *             type: object
 *             properties:
 *                 statusCode:
 *                     type: number
 *                     example: 400
 *                 msg:
 *                     type: string
 *                     example: 파라미터 값을 확인해주세요.
 *       404:
 *         description: parameter error
 *         schema:
 *             type: object
 *             properties:
 *                 statusCode:
 *                     type: number
 *                     example: 404
 *                 msg:
 *                     type: string
 *                     example: 요청 url을 확인해 주세요.
 *       500:
 *         description: parameter error
 *         schema:
 *             type: object
 *             properties:
 *                 statusCode:
 *                     type: number
 *                     example: 500
 *                 msg:
 *                     type: string
 *                     example: 서버 오류.
 * 
 */
router.post("/", function(req, res) {
    console.log(req.body);
    console.log(req.body.userId);
    console.log(req.body.nickname);
});

/**
 * @swagger
 * /trash:
 *   delete:
 *     summary: 산책정보 삭제
 *     tags: [Trash]
 *     parameters:
 *       - in: query
 *         name: sessionKey
 *         type: string
 *         description: 유저 SessionKey
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *          type: object
 *          properties:
 *              trash:
 *                  type: object
 *                  properties:
 *                      id:
 *                          type: number
 *                      question:
 *                          type: string
 *       400:
 *         description: parameter error
 *         schema:
 *             type: object
 *             properties:
 *                 statusCode:
 *                     type: number
 *                     example: 400
 *                 msg:
 *                     type: string
 *                     example: 파라미터 값을 확인해주세요.
 *       404:
 *         description: parameter error
 *         schema:
 *             type: object
 *             properties:
 *                 statusCode:
 *                     type: number
 *                     example: 404
 *                 msg:
 *                     type: string
 *                     example: 요청 url을 확인해 주세요.
 *       500:
 *         description: parameter error
 *         schema:
 *             type: object
 *             properties:
 *                 statusCode:
 *                     type: number
 *                     example: 500
 *                 msg:
 *                     type: string
 *                     example: 서버 오류.
 * 
 */
router.delete("/", function(req, res) {

});


 module.exports = router;