import axios from 'axios'

const burl = 'http://54.94.218.212:3000/'

class DataService{

  public async getUsers(){
    try{
      const { data } = await axios.get(burl + 'users/')
      return data
    }catch(err){
      throw err
    }
  }

  public async createUser(payload){
    try{
      const { data } = await axios.post(burl + 'users/', payload)
      return data
    }catch(err){
      throw err
    }
  }

}

export const dataService = new DataService()