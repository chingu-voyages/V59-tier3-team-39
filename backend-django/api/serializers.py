from rest_framework import serializers
from .models import Role, Question, Option


class OptionSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='option_id')
    
    class Meta:
        model = Option
        fields = ['id', 'text']


class QuestionSerializer(serializers.ModelSerializer):
    options = OptionSerializer(many=True, read_only=True)
    correctOptionId = serializers.CharField(source='correct_option_id')
    
    class Meta:
        model = Question
        fields = ['id', 'text', 'options', 'correctOptionId']


class RoleSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True, read_only=True)
    
    class Meta:
        model = Role
        fields = ['id', 'name', 'questions']