<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    // 全post取得
    public function getAll()
    {
        $posts = Post::latest('created_at')->get();
        return response()->json($posts, 200);
    }

    // post作成
    public function create(Request $request) {
        // $post->userId = $request->userId;
        // $post->displayName = $request->displayName;
        // $post->userName = $request->userName;
        // $post->emailVerified = $request->emailVerified;
        // $post->avatar = $request->avatar;
        // $post->type = $request->type;
        // $post->content = $request->content;
        // $post->image = $request->image;
        // $post->replay = $request->replay;
        // $post->retweet = $request->retweet;
        // $post->likes = $request->likes;
        // $post->replayIds = $request->replayIds;
        // $post->retweetIds = $request->retweetIds;
        // $post->likesIds = $request->likesIds;
        Post::create($request->all());
        $this_post = Post::latest('created_at')->first();
        $reload = $this_post->created_at;
        return response()->json($reload, 200);
      }

    // 全post取得
    public function reload(Request $request)
    {
        $posts = DB::table('posts')->where('created_at', '>=', $request->reload)->get();
        return response()->json($posts, 200);
    }
}