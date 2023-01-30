const noop = () => {}
const NO_PARAMS = {}
const NO_HEADERS = {}
const OK_200 = [200]

function request({
    method = "GET", //тип запроса
    url, //url на который, шлем запрос
    params = NO_PARAMS, // • список query параметров
    headers = NO_HEADERS, // список заголовков запроса
    body, // тело запроса, данные, которые мы отправляем
    responseType = "json", //тип ответа
    requestType = "json", //тип запроса при отправке данных
    okResponse = OK_200, //коды статусов обрабатываемых ответов
    checkStatusInResponse = false, // флаг для проверки статуса ответа
    onSuccess = noop, // функция обработки успешного ответа
    onError = noop, // функция • обработки сетевой ошибки
}) {
    const req = new XMLHttpRequest()

    const urlParams = new URLSearchParams(params)
    const queryString = urlParams.toString()

    req.open(method, url + (queryString ? `?${queryString}` : ""))

    Object.keys(headers).forEach((key) => {
        req.setRequestHeader(key, headers[key])
    })

    req.responseType = responseType

    req.onload = function (event) {
        const target = event.target

        if (!okResponse.includes(target.status)) {
            onError(target.statusText)
            return
        }

        if (checkStatusInResponse && target.response.status !== "ok") {
            onError(target.statusText)
            return
        }

        onSuccess(target.response)

        req.onerror = function () {
            onError()
        }
    }

    let dataBody = body

    if (requestType === "urlencoded") {
        req.setRequestHeader(
            "Content-type",
            "application/x-www-form-urlencoded"
        )
        const bodyParams = new URLSearchParams(body)
        dataBody = bodyParams.toString()
        if (requestType === "json") {
            req.setRequestHeader("Content-type", "application/json")
            dataBody = JSON.stringify(body)
        }
    }

    req.send(dataBody)
}