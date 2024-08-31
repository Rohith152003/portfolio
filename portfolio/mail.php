<?php

// Replace with your actual email server details
$email_to = "rohith152003@gmail.com";
$subject = "Contact Form Submission";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["NAME"];
  $email = $_POST["EMAIL"];
  $subject = $_POST["SUBJECT"];
  $message = $_POST["MESSAGE"];

  $body = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";

  if (mail($email_to, $subject, $body)) {
    echo json_encode(["success" => true]);
  } else {
    echo json_encode(["success" => false]);
  }
} else {
  echo "Invalid request.";
}
?>