export const redirectTemplate = (message, redirectUrl, status) => `
<!DOCTYPE html>
<html>
<head>
    <title>Service Notice</title>
    <script>
        let count = 3;
        document.addEventListener('DOMContentLoaded', () => {
            const messageEl = document.getElementById('message');
            const interval = setInterval(() => {
                count--;
                if (count <= 0) {
                    clearInterval(interval);
                    window.location.href = "${redirectUrl}";
                } else {
                    messageEl.textContent = "${message} Redirecting in " + count + " seconds...";
                }
            }, 1000);
        });
    </script>
    <style>
        body {
            font-family: system-ui, -apple-system, sans-serif;
            max-width: 600px;
            margin: 48px auto;
            padding: 20px;
            line-height: 1.6;
        }
        .notice {
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 8px;
            border: 1px solid #dee2e6;
        }
    </style>
</head>
<body>
    <div class="notice">
        <h1>Service Notice</h1>
        <p id="message">${message} Redirecting in 3 seconds...</p>
    </div>
</body>
</html>
`;
