var eop = {}
module.exports = {
    beforeEach: browser => {
       eop = browser.page.evensAndOddsPage()
       eop
        .navigate()
    },
    after: browser => {
        eop
        .end()
    },
    'evenAndOdd': browser => {
        eop
            .setValue('@eOInput', ['2,4,6,8,10'])
            .click('@button')
            .expect.element('@evenResults').text.to.contain('[2,4,6,8,10]')
        browser
            .clearValue('@eOInput')
            .setValue('@eOInput', ['1,3,5,7,9'])
            .click('@button')
            .expect.element('@oddResults').text.to.contain(['1,3,5,7,9'])
    },
    'filterObject': browser => {
        eop
            .setValue('@oFInput', 'name')
            .click('@oFInput')
            .expect.element('@oFResults').text.to.contain('"name"')
        browser
            .clearValue('@oFInput')
            .setValue('@oFInput', 'hairColor')
            .click('@oFButton')
            .expect.element('@oFResults').text.to.contain('"brown"')
    },
    'Filter String': browser => {
        eop
            .setValue('@nFInout', ['ma'])
            .click('#nFButton')
            .expect.element('nFResults]').text.to.contain('Filtered Names: [ "Mark", "Maddy" ]')
        browser
            .clearValue('@nFInout')
            .setValue('@nFInout', ['fr'])
            .click('#nFButton')
            .expect.element('nFResults]').text.to.not.contain('Filtered Names: [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ]')
    },
    'Palindrome': browser => {
        eop
            .setValue('@pInput', ['mom'])
            .click('@pButton')
            .expect.element('@pResults').text.to.contain('true')
    },
    'sum': browser => {
        eop
            .setValue('@sInput1', ['20'])
            .setValue('@sInput2', ['16'])
            .click('@sButton')
            .expect.element('@sResults').text.to.equal('Sum: 36')
    }
}