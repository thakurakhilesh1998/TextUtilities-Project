$(document).ready(function() {
    $('#countWordsBtn').on('click', function() {
        var text = $('#textInput').val();
        var wordCount = text.split(/\s+/).filter(function(word) {
            return word.length > 0;
        }).length;

        $('#result').text('Word Count: ' + wordCount);
    });

    $('#countCharactersBtn').on('click', function() {
        var text = $('#textInput').val();
        var charCount = text.length;

        $('#result').text('Character Count: ' + charCount);
    });
});
