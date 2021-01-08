const express = require('express');
const router = express.Router();

// https://swagger.io/docs/specification/data-models/data-types/#array 
/**
 * @swagger
 * /plogging:
 *   get:
 *     summary: 산책이력 가져오기
 *     tags: [Plogging]
 *     parameters:
 *       - in: header
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
 *              plogging_list:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          _id:
 *                              type: string
 *                              example: "5ff53c3ff9789143b86f863b"
 *                          meta:
 *                              type: object
 *                              properties:
 *                                  user_id:
 *                                      type: string
 *                                      example: xowns4817@naver.com-naver
 *                                  create_time:
 *                                      type: string
 *                                      format: date-time
 *                                      example: 20210106132743
 *                                  distance:
 *                                      type: number
 *                                      format: float
 *                                      example: 1.5
 *                                  calories:
 *                                      type: numer
 *                                      example: 200
 *                                  plogging_time:
 *                                      type: number
 *                                      example: 20
 *                                  plogging_img:
 *                                      type: string
 *                                      example: "http://localhost:20000/plogging/xowns4817@naver.com-naver/plogging_20210106132743.PNG"
 *                          trash_list:
 *                              type: array
 *                              items:
 *                                  type: object
 *                                  properties:
 *                                      trash_type:
 *                                          type: integer
 *                                          exmaple: 2
 *                                      pick_count:
 *                                          type: integer
 *                                          example: 100
 *    
 *       400:
 *         description: Bad Request(parameter error)
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
 *         description: Bad Request(url error)
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
 *         description: server error
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
 * /plogging:
 *   post:
 *     summary: 산책 이력 등록하기
 *     tags: [Plogging]
 *     consumes:
 *      - multipart/form-data
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: header
 *         name: sessionKey
 *         type: string
 *         required: true
 *       - in: formData
 *         name: ploggingImg
 *         type: file
 *         description: 산책 인증샷
 *         required: false
 *       - in: formData
 *         name: ploggingData
 *         type: string
 *         required: true
 *         example : '{"meta": { "distance": 1.5, "calorie": 200, "flogging_time":20}, "pick_list": [ { "trash_type": 2, "pick_count":100}, {"trash_type":1, "pick_count":200}] }'
 *         description: 산책이력 데이터
 * 
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *          type: object
 *          properties:
 *              plogging:
 *                  type: object
 *                  properties:
 *                      statusCode:
 *                          type: number
 *                          example: 200
 *                      msg:
 *                          type: string
 *                          example: 산책이력 등록 성공
 *       400:
 *         description: Bad Request(parameter error)
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
 *         description: Bad Request(url error)
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
 *         description: server error
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
 * /plogging:
 *   delete:
 *     summary: 산책정보 삭제
 *     tags: [Plogging]
 *     parameters:
 *       - in: header
 *         name: sessionKey
 *         type: string
 *         required: true
 *         description: 유저 SessionKey
 *       - in: query
 *         name: objectId
 *         type: string
 *         required: false
 *         example: "5ff53c3ff9789143b86f863b"
 *         description: 산책이력 식별키
 *     responses:
 *       200:
 *         description: Success
 *         schema:
 *          type: object
 *          properties:
 *             plogging:
 *              type: object
 *              properties:
 *                  statusCode:
 *                      type: number
 *                      example: 200
 *                  msg:
 *                      type: string
 *                      example: 산책이력 삭제 성공
 *             
 *       400:
 *         description: Bad Request(parameter error)
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
 *         description: Bad Request(url error)
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
 *         description: server error
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