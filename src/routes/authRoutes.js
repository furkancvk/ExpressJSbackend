const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication işlemleri
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Kullanıcı kaydı oluştur
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *               surname:
 *                 type: string
 *               gender:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Başarıyla kayıt oluşturuldu
 *       400:
 *         description: Hata oluştu
 */
router.post('/register', register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Kullanıcı girişi yap
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Başarıyla giriş yapıldı
 *       401:
 *         description: Geçersiz kimlik bilgileri
 */
router.post('/login', login);

module.exports = router;
