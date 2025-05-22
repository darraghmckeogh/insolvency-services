//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/security-code-answer', function(request, response) {

    var whatDo = request.session.data['what-do-you-want-to-do']
    var who = request.session.data['who-are-you']
    if (whatDo == "Start a new claim") {
        response.redirect("/full-name")
    } else if (who == "Insolvency practitioner") {
        response.redirect("/task-list_insolvency-practitioner")
    } else if (who == "Non-employee creditor") {
        response.redirect("/task-list_creditor")
    } else {
        response.redirect("/task-list_employee-director")
    }
})

router.post('/continue-answer', function(request, response) {

    var liveInUK = request.session.data['what-do-you-want-to-do']
    if (liveInUK == "Start a new claim"){
        response.redirect("/full-name")
    } else {
        response.redirect("/task-list_employee-director")
    }
})

router.post('/check-your-personal-answers-answer', function(request, response) {

    var who = request.session.data['who-are-you']
    if (who == "Insolvency practitioner") {
        response.redirect("/insolvency-practitioner-q1") // first insolvency practitioner question
    } else if (who == "Non-employee creditor") {
        response.redirect("/creditor-q1") // first creditor question
    } else {
        response.redirect("/employer") // first employee information question
    }
})