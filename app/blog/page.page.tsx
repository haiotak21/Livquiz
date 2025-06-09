                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-8">
                    <div className="flex flex-col sm:flex-row items-center gap-2 mb-4 flex-wrap">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors"> 