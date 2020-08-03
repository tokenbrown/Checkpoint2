module.exports = {
    url:'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        evenOdd: {
            eOInput: '(input[name="evenOddInput"])',
            button:'(button[name="evenOddButton"])',
            evenResults: 'span[name="evenResults"]',
            oddResults: 'span[name="oddResults"]'
        },
        filterObject: {
            oFInput: '(input[name="objectFilterInput"])',
            oFButton: '(button[name="objectFilterButton"])',
            oFResults:'(span[name="objectFilterResults"])'
        },
        filterString: {
            nFInput: '(#nameFilterInput)',
            nFButton: '(#nameFilterButton)',
            nFResults: '(span[name="nameFilterResults)'
        },
        palindrome: {
            pInput: '(input[name="palindromeInput"])',
            pButton: '(button[name="palindromeButton"])',
            pResults: '(span[name="palindromeResults"])'
        },
        sum: {
            sInput1: '(input[name="sumInput1"])',
            sIInput2: '(input[name="sumInput2"])',
            sButton: '(button[name="sumButton"])',
            sResults: '(span[name="sumResults"])'
        }  
    }
}