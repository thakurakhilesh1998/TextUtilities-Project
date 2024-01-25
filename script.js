$(document).ready(function() {
    function updateCharacterCount() {
        var text = $('#textInput').val();
        var charCount = text.length;
        $('#result').text('Character Count: ' + charCount);
    }

    // Count characters on page load
    updateCharacterCount();

    // Count characters dynamically as the user types
    $('#textInput').on('input', function() {
        updateCharacterCount();
    });

    // Count words on button click
    $('#countWordsBtn').on('click', function() {
        var text = $('#textInput').val();
        var wordCount = text.split(/\s+/).filter(function(word) {
            return word.length > 0;
        }).length;

        $('#result').text('Word Count: ' + wordCount);
    });

    // Count characters on button click
    $('#countCharactersBtn').on('click', function() {
        updateCharacterCount();
    });

    // Text Reversal
    $('#reverseTextBtn').on('click', function() {
        var text = $('#textInput').val();
        var reversedText = text.split('').reverse().join('');
        $('#result').text('Reversed Text: ' + reversedText);
    });

    // Text Uppercase
    $('#uppercaseBtn').on('click', function() {
        var text = $('#textInput').val();
        $('#result').text('Uppercase Text: ' + text.toUpperCase());
    });

    // Text Lowercase
    $('#lowercaseBtn').on('click', function() {
        var text = $('#textInput').val();
        $('#result').text('Lowercase Text: ' + text.toLowerCase());
    });

    // Find and Replace
    $('#findReplaceBtn').on('click', function() {
        $('#findReplaceInputs').toggle();
        var findText = $('#searchInput').val();
        var replaceText = $('#replaceInput').val();
        var text = $('#textInput').val();
        var replacedText = text.replace(new RegExp(findText, 'g'), replaceText);
        $('#result').text('Replaced Text: ' + replacedText);
    });

    $('#findbtn').on('click',function()
    {

    });

    $('#replacebtn').on('click',function()
    {
        var findText = $('#searchInput').val();
        var replaceText = $('#replaceInput').val();
        var text = $('#textInput').val();
        var replacedText = text.replace(new RegExp(findText, 'g'), replaceText);
        $('#result').text('Replaced Text: ' + replacedText);
        $('#textInput').val(replacedText);
    });

    // Add other features here...

    // Clear Text
    $('#clearTextBtn').on('click', function() {
        $('#textInput').val('');
        $('#result').empty();
        updateCharacterCount();
    });
});
