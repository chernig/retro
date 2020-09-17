from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import CommentSerializer
from ..models import Comment


@api_view(['GET'])
def comment_list_view(request, *args, **kwargs):
    qs = Comment.objects.all()
    serializer = CommentSerializer(qs, many=True)
    return Response(serializer.data, status=200)

@api_view(['GET'])
def comment_detail_view(request, comment_id, *args, **kwargs):
    qs = Comment.objects.filter(id=comment_id)
    if not qs:
        return Response({}, status=404)
    serializer = CommentSerializer(qs.first())
    return Response(serializer.data, status=200)

@api_view(['POST'])
def comment_create_view(request, *args, **kwargs):
    serializer = CommentSerializer(request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data, status=201)
    return Response({}, status=400)
    
@api_view(['POST', 'DELETE'])
def comment_delete_view(request, comment_id, *args, **kwargs):
    qs = Comment.objects.filter(id=comment_id)
    if not qs:
        return Response({'error': "Such an object doesn't exist"}, status=404)
    obj = qs.first()
    obj.delete()
    return Response({}, status=200)