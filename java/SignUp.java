package com.example.registration;

import android.content.Intent;
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class SignUp extends AppCompatActivity {
    DatabaseHelper databaseHelper;

    EditText et_username, et_address, et_email, et_password;
    Button btn_register, btn_login;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);

        databaseHelper = new DatabaseHelper(this);
        et_username = (EditText)findViewById(R.id.et_username);
        et_address = (EditText)findViewById(R.id.et_address);
        et_email = (EditText)findViewById(R.id.et_email);
        et_password = (EditText)findViewById(R.id.et_password);
        btn_register = (Button)findViewById(R.id.btn_register);
        btn_login = (Button)findViewById(R.id.btn_login);

        btn_login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(SignUp.this, home.class);
                startActivity(intent);
            }
        });

        btn_register.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String username = et_username.getText().toString();
                String password = et_password.getText().toString();


                if(username.equals("") || password.equals("")){
                    Toast.makeText(getApplicationContext(), "Fields Required", Toast.LENGTH_SHORT).show();
                }else{
                        Boolean checkusername = databaseHelper.CheckUsername(username);
                        if(checkusername){
                            Boolean insert = databaseHelper.Insert(username, password);
                            if(insert){
                                Toast.makeText(getApplicationContext(), "Registered", Toast.LENGTH_SHORT).show();
                                et_username.setText("");
                                et_password.setText("");

                            }
                        }else {
                            Toast.makeText(getApplicationContext(), "Username already taken", Toast.LENGTH_SHORT).show();
                        } }
                    }

            });
        }
    }



