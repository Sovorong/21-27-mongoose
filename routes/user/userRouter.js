const path = require('path')
const express = require('express')
const createError = require('http-errors')
const bcrypt = require('bcrypt')
const router = express.Router()
const { Users } = require('../../schemas')

router.get('/create', async (req, res, next) => {
  try {
    // const { userid, userpw, username } = req.body;
    // const user = new Users(req.body)
    const newUser = { userid: 'booldook3', userpw: '1234', username: '옥수정' }
    const user = new Users(newUser)
    const rs = await user.save()
    res.status(200).json(rs)
  }
  catch(err) {
    next(createError(err))
  }
})

router.get('/login', async (req, res, next) => {
  try {
    const user = await Users.login('booldook', '1234');
    user 
      ? res.status(200).json(user) 
      : res.status(401).json({ err: 'loginFail' })
  }
  catch(err) {
    next(createError(err))
  }
})

router.get('/find', async (req, res, next) => {
  try {
    const users = await Users.findByName(req.query.name);
    users 
      ? res.status(200).json(users) 
      : res.status(401).json({ err: 'Not found Result' })
  }
  catch(err) {
    next(createError(err))
  }
})

module.exports = router