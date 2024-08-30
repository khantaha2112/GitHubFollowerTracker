document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('getDataButton').addEventListener('click', function () {
        const username = document.getElementById('username').value.trim();

        if (username !== '') {
            const requestUrl = `https://api.github.com/users/${username}`;
            const xhr = new XMLHttpRequest();

            xhr.open('GET', requestUrl);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    const userData = JSON.parse(xhr.responseText);

                    // Display user card
                    document.getElementById('userCard').style.display = 'block';

                    // Show user data
                    document.getElementById('userImage').src = userData.avatar_url;
                    document.getElementById('followersCount').textContent = `Followers: ${userData.followers}`;
                    
                    // Display user data container
                    document.getElementById('userData').style.display = 'block';

                    document.getElementById('inputContainer').style.display = "none";
                }
            }

            xhr.send();
        }
    });
});
