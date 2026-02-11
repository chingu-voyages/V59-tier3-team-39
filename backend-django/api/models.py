from django.db import models


class Role(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=100)


class Question(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    text = models.TextField()
    correct_option_id = models.CharField(max_length=10)
    role = models.ForeignKey(Role, on_delete=models.CASCADE, related_name='questions')


class Option(models.Model):
    option_id = models.CharField(max_length=10)
    text = models.TextField()
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='options')
