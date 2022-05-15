import { makeAutoObservable, runInAction } from "mobx"
import axios, { AxiosRequestConfig } from "axios"
import { BooksDetailsProps, BooksProps, ParsedSecurityData, SecurityData } from "../types"
import { parseRefreshResponse, parseResponse } from "../assets/helpers/parseResponse"
const PATH = 'https://books.ioasys.com.br/api/v1'
const DEFAULT_BOOKS_AMOUNT = 10

class GlobalStore {
    securePass:boolean = true
    userData:string = ''
    securityData:SecurityData ={}
    email:string = ''
    booksList:Array<object> = []
    currentBookDetails:BooksDetailsProps = {}
    pageCount:number = 1
    refreshTokenData:ParsedSecurityData = {}
    newRefreshTokenData:ParsedSecurityData = {}
    passWord:string = ''
    bookId:string = ''
    refreshToken:string = ''
    isFetching:boolean = false
    isDetailsFetching:boolean = false
    error = {
        hasError:false,
        errorMessage: ''
    }

    async loginUser(){
        try{
            const payload = 
            {
                email: this.email,
                password: this.passWord
            }
            const result = await this.post(`${PATH}/auth/sign-in`,payload)
            const {data,headers} = result
            this.userData = data
            this.refreshTokenData = parseResponse(headers)
            await this.getRefreshToken()
            return true
        }catch(error:any){
            this.toogleError(error)
            return false
        }
    }


    async getRefreshToken(){
        try{
            const payload = 
            {
                refreshToken: this.refreshTokenData.refreshToken
            }
            const { headers } = await this.post(`${PATH}/auth/refresh-token`,payload)
            this.newRefreshTokenData = parseResponse(headers)
            await this.getBooksList()
            return true
        }catch(error:any){
            this.toogleError(error)
            return false
        }
    }

    async getBooksList(){
        const headers = {
            Authorization: `Bearer ${this.newRefreshTokenData?.authorization}`
        }
        try{
            const result = await this.get(`${PATH}/books?page=${this.pageCount}&amount=${DEFAULT_BOOKS_AMOUNT}`,{ headers })
            const {data} = result
            
this.addBooks(data)      
            return true
        }catch(error:any){
            this.toogleError(error)
            return false
        }
    }

async getBookById(){
    const headers = {
        Authorization: `Bearer ${this.newRefreshTokenData?.authorization}`
    }
    try{
        this.toogleDetailsFetching()
        const result = await this.get(`${PATH}/books/${this.bookId}`,{ headers })
        const {data} = result
        this.setBooksDetails(data)
        this.toogleDetailsFetching()        
        return true
    }catch(error:any){
        this.toogleError(error)
        this.toogleDetailsFetching()
        return false
    }
}

    async get(url:string, axiosConfig?:AxiosRequestConfig) {
        try{
            
            this.toggleIsFetching()
            const result:any = await axios.get(url,axiosConfig)
            this.toggleIsFetching()
            return result
        }catch(err:any){
            this.toggleIsFetching()
            throw err.response.data
        }
    }
    async post(url:string,payload:object, axiosConfig?:AxiosRequestConfig) {
        try{
            this.toggleIsFetching()
            const  result :any = await axios.post(url,payload,axiosConfig)
            this.toggleIsFetching()
            return result
        }catch(err:any){
            this.toggleIsFetching()
            throw err.response.data
        }
    }

    toogleSecure(){
        this.securePass= !this.securePass
    }
    toogleDetailsFetching(){
        this.isDetailsFetching = !this.isDetailsFetching
    }
    setBooksDetails(description:BooksProps){
        this.currentBookDetails = description
    }
    setEmail(text:string){
        this.email = text
    }
    setPassWord(text:string){
        this.passWord = text
    }
    increasePageCount(){
        this.pageCount+=1
    }
    toogleError(error:any){
        this.error={
            errorMessage:error?.errors.message,
            hasError:!this.error.hasError
        }
    }
    addBooks(books:any){
        this.booksList = [
            ...this.booksList,
            ...books.data
        ] 
    }
    toggleIsFetching(){
        this.isFetching = !this.isFetching
    }
    constructor(){
        makeAutoObservable(this)
    }
}
export default new GlobalStore()