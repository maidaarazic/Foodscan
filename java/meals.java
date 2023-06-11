package com.example.foodscan_app;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class meals extends AppCompatActivity {

    private TextView moreText;
    private boolean isMoreTextVisible = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_meals);

        moreText = findViewById(R.id.moreText);

        // Set initial visibility of moreText TextView
        moreText.setVisibility(View.GONE);

        // Set click listener on moreText TextView to toggle its visibility
        moreText.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                toggleMoreTextVisibility();
            }
        });
    }

    private void toggleMoreTextVisibility() {
        if (isMoreTextVisible) {
            moreText.setVisibility(View.GONE);
        } else {
            moreText.setVisibility(View.VISIBLE);
        }
        isMoreTextVisible = !isMoreTextVisible;
    }
}
