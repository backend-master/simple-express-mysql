const sql = require('mssql')
const {configMs} = require('../config/db')

module.exports = {
  getProductCat : (req, res) => {
    sql.connect(configMs, err => {
      if (err) return res.json({err})
  
      const request = new sql.Request()
  
      request.query('select * from master_prd_cat', (r, rec) => {
      if (r) return res.json({err: r})
        res.status(200).json({data: rec})
      })
    })
  },

  getProdcutCatInv: (req, res) => {
    sql.connect(configMs, err => {
      if (err) return res.json({err})
  
      const request = new sql.Request()
  
      request.query('select * from master_prd_cat_inv', (r, rec) => {
      if (r) return res.json({err: r})
        res.status(200).json({data: rec})
      })
    })
  }, 

  getPriceCode: (req, res) => {
    sql.connect(configMs, err => {
      if (err) return res.json({err})
  
      const request = new sql.Request()
  
      request.query('select * from master_prd_pricecode', (r, rec) => {
      if (r) return res.json({err: r})
        res.status(200).json({data: rec})
      })
    })
  },

  getPriceTab: (req, res) => {
    sql.connect(configMs, err => {
      if (err) return res.json({err})
  
      const request = new sql.Request()
  
      request.query('select * from master_prd_pricetab', (r, rec) => {
      if (r) return res.json({err: r})
        res.status(200).json({data: rec})
      })
    })
  }
}