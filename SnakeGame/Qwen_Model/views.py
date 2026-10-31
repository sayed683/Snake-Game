from django.shortcuts import render

from django.http import JsonResponse
from .Services.Qwen_Service import run_Qwen_model

# Create your views here.


def call_Qwen_service(request):
    prompt = request.GET.get("prompt" , "")

    response = run_Qwen_model(prompt)

    return JsonResponse({
        "answer" : response
    })