// export default defineNuxtPlugin((app) => {
//     const api = app.$axios.create({
//         baseURL: 'http://localhost:3000',
//     })

//     // onErrorを使用して、サーバーからエラーレスポンスが返ってきた時の処理を記載する。
//     api.interceptors.response.use(
//         function (response) {
//         return response
//         },
//         function (error) {
//         if (!error.response) {
//             console.log(error)
//             return error
//         }
//         // サーバーサイドからのレスポンスが、404の時は404ページに飛ぶ。等の操作ができる
//         if (error.response.status === 404) {
//             app.redirect('/404')
//         }
//         return error.response
//         }
//     )

//     return {
//         provide: {
            
//         }
//     }
// })