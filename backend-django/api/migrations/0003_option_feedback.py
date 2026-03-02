from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_question_hint'),
    ]

    operations = [
        migrations.AddField(
            model_name='option',
            name='feedback',
            field=models.TextField(blank=True, default=''),
        ),
    ]
