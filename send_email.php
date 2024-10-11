<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate the email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "fieldsmc7@gmail.com";
        $subject = "New Contact Form Submission from $name";
        $body = "Name: $name\nEmail: $email\nMessage:\n$message";

        // Send the email
        if (mail($to, $subject, $body)) {
            echo "Message sent successfully.";
        } else {
            echo "Failed to send message. Please try again.";
        }
    } else {
        echo "Invalid email format. Please provide a valid email.";
    }
}
?>
