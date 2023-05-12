package com.example.registration;

import androidx.annotation.NonNull;


public abstract class OnCompleteListener<T> {
    public abstract void onComplete(@NonNull com.example.registration.Task<Void> task);
}
