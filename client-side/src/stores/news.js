import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useCounterNews = defineStore('news', {
  state: () => ({
    BASE_URL: 'https://api3.reynalviyurandhika.xyz/',
    dataNews: [],
    favoriteData: [],
    userData: {},
    pagination: 1,
    filter: ''
   }),
  actions: {
    async handleLogin(val) {
      try {
        console.log(val, '<<<<<<<<')
        const {data} = await axios({
          url: this.BASE_URL + 'login',
          method: 'post',
          data: val
        })

        console.log(data)
        localStorage.setItem('access_token', data.access_token)
        this.$router.push('/')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login Success',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        Swal.fire({
          position: 'top-end',
          icon: 'invalid',
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500
        })
        console.log(error)
      }
    },
    async handleRegister(val) {
      try {
        console.log(val, "<<<<<<<<<< REGISTER")
        const {data} = await axios({
          url: this.BASE_URL + 'register',
          method: 'post',
          data: val
        })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Register Success',
          showConfirmButton: false,
          timer: 1500
          })
        console.log(data)
        this.$router.push('/login')
      } catch (error) {
        Swal.fire({
          position: 'top-end',
          icon: 'invalid',
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500
          })
        console.log(error)
      }
    },
    async fetchNews() {
      try {
        console.log('news')
        if (this.pagination) {
          this.pagination
        }
        if (this.filter) {
          this.filter
        }

        const {data} = await axios({
          url: this.BASE_URL + 'news',
          method: 'get',
          headers: {
            access_token: localStorage.access_token
          },
          params: {
            page: this.pagination,
            filter: this.filter
          }
        })
        console.log(data)
        this.dataNews = data
      } catch (error) {
        console.log(error)
      }
    },
    logOut() {
      try {
        localStorage.removeItem('access_token')
        this.$router.push('/login') 
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Logout Success`,
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        Swal.fire({
          position: 'top-end',
          icon: 'invalid',
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500
        })
        console.log(error)
      }
    },
    async changeStatusUser() {
      try {
        const {data} = await axios({
          url: this.BASE_URL + 'status-user',
          method: 'patch',
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
    async paymentUser() {
      try {

        const {data} = await axios({
          url: this.BASE_URL + 'generate-midtrans-token',
          method: 'post',
          headers: {
            access_token: localStorage.access_token
          }
        })

        const changeStatus = this.changeStatusUser

        console.log(data)

        window.snap.pay(data.token, {
          onSuccess: function(result){
            /* You may add your own implementation here */
            console.log(result);
            changeStatus()
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
    async addFavorite(val) {
      try {
        console.log(val, '<<<<<<<<')
        const dataFav = {
          author: val.author,
          title: val.title,
          description: val.description,
          url: val.url,
          urlToImage: val.urlToImage,
          content: val.content,
          publishedAt: val.publishedAt,
        }
        console.log(dataFav, '<<<<< DATA FAVORIT')

        const {data} = await axios({
          url: this.BASE_URL + 'favorites',
          method: 'post',
          data: dataFav,
          headers: {
            access_token: localStorage.access_token
          }
        })

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Add to my favorite Success`,
          showConfirmButton: false,
          timer: 1500
        })

        this.$router.push('/favorite')
      } catch (error) {
        Swal.fire({
          position: 'top-end',
          icon: 'invalid',
          title: error.response.data.message,
          showConfirmButton: false,
          timer: 1500
        })
        console.log(error)
      }
    },
    async fetchFavorite() {
      try {

        const {data} = await axios({
          url: this.BASE_URL + 'favorites',
          method: 'get',
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.favoriteData = data
        console.log(this.favoriteData)
      } catch (error) {
        console.log(error)
      }
    },
    async userHandle() {
      const {data} = await axios({
        url: this.BASE_URL + 'user',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
      this.userData = data
      console.log(this.userData)
    },
    changePagination(val) {
      console.log(val)
      this.pagination = this.pagination + val
      console.log(this.pagination)
      this.fetchNews()
    },
    changeFilter(val) {
      this.pagination = 1
      this.filter = val
      console.log(val)
      this.fetchNews()
      this.filter = ''
    },
  },
})