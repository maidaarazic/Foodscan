package com.example.registration;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Patterns;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.Toast;

public class ForgotPasswordActivity extends AppCompatActivity {

    private Button button_password_reset;
    private EditText editText_password_reset_email;
    private ProgressBar progressBar;
    private FirebaseAuth authProfile;

    @SuppressLint("MissingInflatedId")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_forgot_password);

        getSupportActionBar().setTitle("Forgot Password");

        editText_password_reset_email = findViewById(R.id.editText_password_reset_email);
        button_password_reset = findViewById(R.id.button_password_reset);
        progressBar = findViewById(R.id.progressBar);

        button_password_reset.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String email = editText_password_reset_email.getText().toString();

                if (TextUtils.isEmpty(email)) {
                    Toast.makeText(ForgotPasswordActivity.this, "Please enter your registered email", Toast.LENGTH_SHORT).show();
                    editText_password_reset_email.setError("Email is required");
                    editText_password_reset_email.requestFocus();
                } else if (!Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
                    Toast.makeText(ForgotPasswordActivity.this, "Please enter valid email", Toast.LENGTH_SHORT).show();
                    editText_password_reset_email.setError("Valid email is required");
                    editText_password_reset_email.requestFocus();
                } else {
                    progressBar.setVisibility(View.VISIBLE);
                    resetPassword(email);
                }
            }
        });
    }

   private void resetPassword(String email){
        authProfile = FirebaseAuth.getInstance();
        authProfile.password_reset_email(email).addOnCompleteListener(this, new OnCompleteListener<Void>() {

            @Override
            public void onComplete(@NonNull Task<Void> task) {
                if(task.isSuccessful()){
                    Toast.makeText(ForgotPasswordActivity.this, "Please check your inbox for password reset link",Toast.LENGTH_SHORT).show();

                    Intent intent = new Intent (ForgotPasswordActivity.this, MainActivity.class);

                    intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);
                    startActivity(intent);
                    finish();
                }else{
                    Toast.makeText(ForgotPasswordActivity.this, "Something went wrong!", Toast.LENGTH_SHORT).show();
                }
                progressBar.setVisibility(View.GONE);
            }
        });
   }
}